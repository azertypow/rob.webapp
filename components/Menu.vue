<template>
    <section class="v-menu"
    >
        <div class="v-menu__content"
        >
            <div class="g-grid-box">
                <div class="g-grid-box__col-end--span-5">
                    <div class="v-menu__img-box">
                        <img class="v-menu__img-box__img"
                             alt="image cover of hover project in list"
                             v-if="getHoverProjectInfo"
                             :src="getHoverProjectInfo?.imageCoverForIndex.resize?.small"
                             :key="getHoverProjectInfo?.imageCoverForIndex.url"
                        />
                    </div>
                </div>
                <div class="g-grid-box__col-start--7 g-grid-box__col-end--span-18"
                >
                    <div class="v-menu__list-box"
                         :class="{
                            'v-menu__list-box--with-long-title': projectSlugMouseOverInList.length > 50
                         }"
                    >
                        <div class="v-menu__list-box__scroll"
                             @mouseleave="projectSlugMouseOverInList = ''"
                        >
                            <nuxt-link
                                v-for="project of projectsReverse"
                                class="g-grid-box v-menu__list-box__item"
                                :href="`/project/${project.slug}`"
                                @mouseover="projectSlugMouseOverInList = project.slug"
                            >
                                <div class="g-grid-box__col-end--span-12">
                                    <div class="v-menu__list-box__item__title"
                                    >
                                        {{ project.title }}
                                    </div>
                                </div>

                                <div class="g-grid-box__col-end--span-8">
                                    <div class="v-menu__list-box__item__tags"
                                    >
                                        <template v-for="(tag, index) of project.tags">
                                            <span v-if="index > 0">, </span>
                                            <button>{{ tag.title }}</button>
                                        </template>
                                    </div>
                                </div>
                                <div class="g-grid-box__col-end--span-4"
                                >
                                    <div class="v-menu__list-box__item__date"
                                    >
                                        {{formatDateFromString(project.date).year || 'Ongoing'}}
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import {type ComputedRef, defineProps} from 'vue'
import type {IApiListOfProjectsInfo, IApiProjectInfo} from "~/server/api/projectsInfo";
import {formatDateFromString} from "~/utils/formatDateFromString";

const projectsInfo = useState<IApiListOfProjectsInfo>('projectsInfo')
const projectSlugMouseOverInList = ref('')

const projectsReverse: ComputedRef<IApiProjectInfo[]> = computed(() => {
    return projectsInfo.value.projects.toReversed()
})

const getHoverProjectInfo = computed(() => {
    if( projectSlugMouseOverInList.value.length < 1 ) return null

    return findProjectInfoBySlug(projectsInfo.value.projects, projectSlugMouseOverInList.value)
})

</script>





<style lang="scss" scoped >
.v-menu {
    width: 100%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    padding: var(--rb-nav-height) var(--rb-gutter) var(--rb-gutter);
    overscroll-behavior: contain;
    overflow: scroll;
}

.v-menu__content {
    padding-bottom: calc(100vh - 5rem);
}

.v-menu__list-box {
    overflow: hidden;

    button {
        all: unset;
    }

    .v-menu__list-box__scroll {
    }
}

.v-menu__list-box__item {
    text-decoration: none;
    color: inherit;
    margin-bottom: .25rem;
    white-space: nowrap;

    &:hover {
        color: var(--rb-nav-blue);
        user-select: none;

        .v-menu__list-box__item__title {
            overflow: visible;

            &:after {
                content: none;
            }
        }

        .v-menu__list-box__item__tags {
            .v-menu__list-box--with-long-title & {
                opacity: 0;
            }
            user-select: none;
        }

        .v-menu__list-box__item__date {
            user-select: none;
        }
    }
}

.v-menu__list-box__item__date {
    text-align: right;
}

.v-menu__list-box__item__title {
    position: relative;
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        display: block;
        height: 100%;
        top: 0;
        right: 0;
        width: 5rem;
        background: linear-gradient(-90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        z-index: 10;
    }
}

.v-menu__img-box {
    position: relative;
    width: 100%;
}

.v-menu__img-box__img {
    display: block;
    width: 100%;
    position: absolute;
}
</style>
