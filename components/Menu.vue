<template>
    <section class="v-menu"
    >
        <div class="v-menu__content"
        >
            <div class="g-grid-box">
                <div class="g-grid-box__col-end--span-5">
                    <div class="v-menu__img-box" >
                        <img alt="image cover of hover project in list"
                             style="background: var(--rb-nav-blue); display: block; width: 100%; padding-top: 100%"
                        />
                    </div>
                </div>
                <div class="g-grid-box__col-start--7 g-grid-box__col-end--span-18"
                >
                    <div class="v-menu__list-box" >
                        <div class="v-menu__list-box__scroll"
                        >
                            <nuxt-link
                                v-for="project of projectsInfo"
                                class="g-grid-box v-menu__list-box__item"
                                :href="`/project/${project.slug}`"
                            >
                                <div class="g-grid-box__col-end--span-12">
                                    {{ project.title }}
                                </div>
                                <div class="g-grid-box__col-end--span-8">
                                    <template v-for="(tag, index) of project.tags">
                                        <span v-if="index > 0"> + </span>
                                        <button>{{ tag }}</button>
                                    </template>
                                </div>
                                <div class="g-grid-box__col-end--span-4"
                                     style="text-align: right"
                                >
                                    {{project.date}}
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
import { defineProps } from 'vue'
import type {IApiProjectsInfo} from "~/server/api/projectsInfo";


const projectsInfo = useState<IApiProjectsInfo[]>('projectsInfo')
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
    }
}
</style>
