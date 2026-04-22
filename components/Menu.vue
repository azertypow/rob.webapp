<template>
    <section class="v-menu"
    >
        <div class="v-menu__mobil_nav g-grid-box">
            <nuxt-link href="/about"     >About</nuxt-link>
            <nuxt-link href="/contact"   >Contact</nuxt-link>
        </div>
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
                                @mouseover="setOverProject(project.slug)"
                            >
                                <div class="g-grid-box v-menu__list-box__item__wrapper"
                                     :class="{
                                        'is-current-project': useRoute().path.replace('/project', '') === '/' + project.slug
                                     }"
                                     ref="refProjectLineContainer"
                                >
                                    <div class="g-grid-box__col-end--span-5 g-grid-box--reg__col-end--span-6"
                                    >
                                        <div class="v-menu__list-box__item__wrapper__date"
                                        >
                                            {{ formatDateWithAndStart(project.date_start, project.date) }}
                                        </div>
                                    </div>

                                    <div class="g-grid-box__col-end--span-12 g-grid-box--reg__col-end--span-18">
                                        <div class="v-menu__list-box__item__wrapper__title">
                                            <div class="v-menu__list-box__item__wrapper__title__text">
                                                <span
                                                    style="font-size: .5rem; position: relative; top: -.175em; margin-right: .25em"
                                                    v-if="useRoute().path.replace('/project', '') === '/' + project.slug"
                                                >
                                                    ●
                                                </span>
                                                {{ project.title }}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="g-grid-box__col-end--span-7 g--reg__display-none">
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
                        <img class="v-menu__img-box__img"
                             alt="image cover of hover project in list"
                             v-if="getHoverProjectInfo"
                             :src="getHoverProjectInfo?.imageCoverForIndex.resize?.reg"
                             :key="getHoverProjectInfo?.imageCoverForIndex.url"
                        />
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
    setClassForLongTextForProjectLineContainer()
    return projectsInfo.value?.projects?.toReversed()
})

const getHoverProjectInfo = computed(() => {
    if( projectSlugMouseOverInList.value.length < 1 ) return null

    return findProjectInfoBySlug(projectsInfo.value.projects, projectSlugMouseOverInList.value)
})

let isFirstInteraction = true
let debounceTimer: number | null = null

function setOverProject(projectOverSlug: string) {

    if(isFirstInteraction) {
        projectSlugMouseOverInList.value = projectOverSlug
        isFirstInteraction = false
        return
    }

    if (debounceTimer) window.clearTimeout(debounceTimer)

    debounceTimer = window.setTimeout(() => {
        projectSlugMouseOverInList.value = projectOverSlug
        debounceTimer = null
    }, 100)

}

onMounted(() => {
    setClassForLongTextForProjectLineContainer()
})

function setClassForLongTextForProjectLineContainer() {
    for(const line of refProjectLineContainer.value) {
        setClassForLongText({
            line,
            containerSelector: '.v-menu__list-box__item__wrapper__title',
            textSelector: '.v-menu__list-box__item__wrapper__title__text',
            classNameIfLongText: 'rb-has-long-title',
        })
        setClassForLongText({
            line,
            containerSelector: '.v-menu__list-box__item__wrapper__tags',
            textSelector: '.v-menu__list-box__item__wrapper__tags__text',
            classNameIfLongText: 'rb-has-long-tags-list',
        })
    }
}

function setClassForLongText({line, containerSelector, textSelector, classNameIfLongText}: {
    line: HTMLElement
    containerSelector: string
    textSelector: string
    classNameIfLongText: string
}) {

        const titleContainer = line.querySelector(containerSelector)
        const titleText = titleContainer?.querySelector(textSelector)

        if(!(titleText instanceof HTMLElement) || !( titleContainer instanceof HTMLElement ) ) return

        if(titleText.offsetWidth > titleContainer.offsetWidth) {
            line.classList.add(classNameIfLongText)
            titleContainer.style.setProperty('--rb-text-overflow-width', `${titleText.offsetWidth}`)
            titleContainer.style.setProperty('--rb-title-container-width', `${titleContainer.offsetWidth}`)
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

.v-menu__mobil_nav {
    display: none;
    //justify-content: flex-end;
    margin-top: -.5rem;
    padding-bottom: 1.5rem;
    //padding-bottom: 1rem;
    //gap: var(--rb-gutter);
    flex-direction: column;

    > * {
        color: inherit;
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    @media (max-width: 900px) {
        display: flex;
    }
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
    .is-current-project & {
        cursor: default;
        color: black;
    }
}

.v-menu__list-box__item__wrapper__title {
    position: relative;
    overflow: hidden;
    display: flex;

    .rb-has-long-title & {
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

        .v-menu__list-box__item__wrapper:hover & {
            overflow: visible;
            &:after {
                content: none;
            }
        }
        @media (max-width: 1200px) {
            .v-menu__list-box__item__wrapper & {
                overflow: hidden !important;
                &:after {
                    content: "" !important;
                }
            }
        }

    }
}

.v-menu__list-box__item__wrapper__title__text {
    padding-right: 5rem;

    .is-current-project & {
        cursor: default;
        color: black;
    }
}

.v-menu__list-box__item__wrapper__tags {
    display: flex;
    position: relative;
    overflow: hidden;

    .rb-has-long-tags-list & {
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

.v-menu__list-box__item__wrapper__tags__text {
    padding-right: 5rem;


    .is-current-project & {
        cursor: default;
        color: black;
    }

    .v-menu__list-box__item__wrapper.rb-has-long-title:hover & {
        display: none;
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
    aspect-ratio: 9/16;
    object-fit: contain;
    object-position: top;
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
