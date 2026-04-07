<template>
    <section class="v-menu"
    >
        <div class="v-menu__content"
        >
            <div class="g-grid-box">
                <div class="g-grid-box__col-end--span-18 g-grid-box--reg__col-end--span-16 g-grid-box--sm__col-end--span-24"
                >
                    <div class="v-menu__list-box">
                        <div class="v-menu__list-box__scroll"
                             @mouseleave="projectSlugMouseOverInList = ''"
                        >
                            <nuxt-link
                                v-for="project of projectsReverse"
                                class="v-menu__list-box__item__wrapper"
                                :href="`/project/${project.slug}`"
                                @mouseover="projectSlugMouseOverInList = project.slug"
                            >
                                <div class="g-grid-box v-menu__list-box__item__wrapper"
                                     ref="refProjectLineContainer"
                                >
                                    <div class="g-grid-box__col-end--span-5 g-grid-box--reg__col-start--1 g-grid-box--reg__col-end--span-7 g-grid-box--reg__order--2 g-grid-box--sm__col-start--1 g-grid-box--sm__col-end--span-8"
                                    >
                                        <div class="v-menu__list-box__item__wrapper__date"
                                        >
                                            {{ formatDateWithAndStart(project.date_start, project.date) }}
                                        </div>
                                    </div>

                                    <div class="g-grid-box__col-end--span-12 g-grid-box--reg__col-start--1 g-grid-box--reg__col-end--span-24 g-grid-box--reg__order--1">
                                        <div class="v-menu__list-box__item__wrapper__title">
                                            <div class="v-menu__list-box__item__wrapper__title__text">
                                                {{ project.title }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="g-grid-box__col-end--span-7 g-grid-box--reg__col-start--8 g-grid-box--reg__col-end--span-24 g-grid-box--reg__order--3 g-grid-box--sm__col-start--9 g-grid-box--sm__col-end--span-16">
                                        <div class="v-menu__list-box__item__wrapper__tags"
                                        >
                                            <div class="v-menu__list-box__item__wrapper__tags__text">
                                                <template v-for="(tag, index) of project.tags">
                                                    <span v-if="index > 0">, </span>
                                                    <button>{{ tag.title }}</button>
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="g-grid-box__col-start--20 g-grid-box__col-end--span-5 g-grid-box--reg__col-start--18 g-grid-box--reg__col-end--span-7 g--sm__display-none">
                    <div class="v-menu__img-box">
                      <transition name="v-transition-mask-slide" mode="out-in" >
                        <img class="v-menu__img-box__img"
                             alt="image cover of hover project in list"
                             v-if="getHoverProjectInfo"
                             :src="getHoverProjectInfo?.imageCoverForIndex.resize?.small"
                             :key="getHoverProjectInfo?.imageCoverForIndex.url"
                        />
                      </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import {type ComputedRef, defineProps} from 'vue'
import type {IApiListOfProjectsInfo, IApiProjectInfo} from "~/composables/api/projectsInfo";
import {formatDateFromString, formatDateWithAndStart} from "~/utils/formatDateFromString";

const projectsInfo = useState<IApiListOfProjectsInfo>('projectsInfo')
const projectSlugMouseOverInList = ref('')

const refProjectLineContainer: Ref<HTMLElement[]> = ref([])

const projectsReverse: ComputedRef<IApiProjectInfo[]> = computed(() => {
    return projectsInfo.value?.projects?.toReversed()
})

const getHoverProjectInfo = computed(() => {
    if( projectSlugMouseOverInList.value.length < 1 ) return null

    return findProjectInfoBySlug(projectsInfo.value.projects, projectSlugMouseOverInList.value)
})

onMounted(() => {
    for(const line of refProjectLineContainer.value) {
        setClassForLongText({
            line,
            containerSelector: '.v-menu__list-box__item__wrapper__title',
            textSelector: '.v-menu__list-box__item__wrapper__title__text',
        })
        setClassForLongText({
            line,
            containerSelector: '.v-menu__list-box__item__wrapper__tags',
            textSelector: '.v-menu__list-box__item__wrapper__tags__text',
        })
    }

})

function setClassForLongText({line, containerSelector, textSelector}: { line: HTMLElement, containerSelector: string, textSelector: string }) {

        const titleContainer = line.querySelector(containerSelector)
        const titleText = titleContainer?.querySelector(textSelector)

        if(!(titleText instanceof HTMLElement) || !( titleContainer instanceof HTMLElement ) ) return

        if(titleText.offsetWidth > titleContainer.offsetWidth) {
            titleContainer.classList.add('rb-has-long-text-child')
            titleContainer.style.setProperty('--rb-text-overflow-width', `${titleText.offsetWidth}`)
            titleContainer.style.setProperty('--rb-title-container-width', `${titleContainer.offsetWidth}`)
            titleContainer.appendChild(titleText.cloneNode(true))
        }
}

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
    --v-menu-gradient-overflow-width: 2rem;
}

.v-menu__content {
    padding-bottom: calc(50vh);
}

.v-menu__list-box {
    overflow: hidden;

    button {
        all: unset;
    }
}

.v-menu__list-box__item__wrapper {
    text-decoration: none;
    color: inherit;
    margin-bottom: .25rem;
    white-space: nowrap;

    &:hover {
        color: var(--rb-nav-blue);
    }
}

.v-menu__list-box__item__wrapper__date {
    @media (max-width: 1200px) {
        padding-bottom: 1rem;
    }
}

.v-menu__list-box__item__wrapper__title {
    position: relative;
    overflow: hidden;
    display: flex;

    &.rb-has-long-text-child {
        &:before {
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            top: 0;
            left: 0;
            width: var(--v-menu-gradient-overflow-width);
            background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            z-index: 10;
        }
        &:after {
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            top: 0;
            right: 0;
            width: var(--v-menu-gradient-overflow-width);
            background: linear-gradient(-90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            z-index: 10;
        }
    }
}

.v-menu__list-box__item__wrapper__title__text {
    padding-right: 5rem;

    .rb-has-long-text-child & {
        animation-name: v-title-overflow-animation;
        animation-timing-function: linear;
        animation-duration: calc(var(--rb-text-overflow-width) / 25 * 1s);
        animation-iteration-count: infinite;
        animation-direction: normal;
    }
}

.v-menu__list-box__item__wrapper__tags {
    display: flex;
    position: relative;
    overflow: hidden;

    &.rb-has-long-text-child {
        &:after {
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            top: 0;
            right: 0;
            width: var(--v-menu-gradient-overflow-width);
            background: linear-gradient(-90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            z-index: 10;
        }
        .v-menu__list-box__item__wrapper:hover &:before {
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            top: 0;
            left: 0;
            width: var(--v-menu-gradient-overflow-width);
            background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
            z-index: 10;
        }
    }

}

.v-menu__list-box__item__wrapper__tags__text {
    padding-right: 5rem;

    .v-menu__list-box__item__wrapper:hover .rb-has-long-text-child & {
        animation-name: v-title-overflow-animation;
        animation-timing-function: linear;
        animation-duration: calc(var(--rb-text-overflow-width) / 25 * 1s);
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @media (max-width: 1200px) {
        padding-bottom: 1rem;
    }
}

.v-menu__img-box {
    width: 100%;
    position: sticky;
    top: 0;
}

.v-menu__img-box__img {
    display: block;
    width: 100%;
    position: absolute;
}

@keyframes v-title-overflow-animation {
    0% {
        transform: translateX(0);
    }

    100% {
        //transform: translateX( calc(-200% + (var(--rb-title-container-width) * 1px) ) );
        transform: translateX(-100%);
    }
}
</style>
