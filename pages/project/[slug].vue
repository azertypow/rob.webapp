<template>
    <div class="v-project-slug">

      <div class="v-project-slug__project-navigation" v-if="previousProject || nextProject">
        <nuxt-link
          class="v-project-slug__project-navigation__link v-project-slug__project-navigation__link--next"
          :href="nextProject ? `/project/${nextProject.slug}` : ''"
          v-if="nextProject"
          @mousemove="cursorPosition = {x: $event.clientX, y: $event.clientY}"
          @mouseleave="arrowDirection = 0"
          @mouseenter="arrowDirection = -1"
        >
        </nuxt-link>

        <nuxt-link
          class="v-project-slug__project-navigation__link v-project-slug__project-navigation__link--before"
          :href="previousProject ? `/project/${previousProject.slug}` : ''"
          v-if="previousProject"
          @mousemove="cursorPosition = {x: $event.clientX, y: $event.clientY}"
          @mouseleave="arrowDirection = 0"
          @mouseenter="arrowDirection = 1"
        >
        </nuxt-link>


        <svg width="99" height="82" viewBox="0 0 44.9 44.3" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="v-project-slug__project-navigation__cursor"
             :style="{
                            top: cursorPosition.y + 'px',
                            left: cursorPosition.x + 'px',
                        }"
             v-if="arrowDirection === 1"
        >
          <g id="Layer_1-2">
            <path d="M35.900390625,24.5458984375H0v-4.828125h35.83203125L16.1142578125,0h6.59521484375l22.16552734375,22.166015625-22.16552734375,22.166015625h-6.59521484375l19.7861328125-19.7861328125Z" style="fill: white"/>
          </g>
        </svg>
        <svg width="99" height="82" viewBox="0 0 44.9 44.3" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="v-project-slug__project-navigation__cursor"
             :style="{
                            top: cursorPosition.y + 'px',
                            left: cursorPosition.x + 'px',
                        }"
             v-else-if="arrowDirection === -1"
        >
          <g id="Layer_1-2">
            <path d="M9,19.8h35.9v4.8H9l19.7,19.7h-6.6L0,22.2,22.2,0h6.6L9,19.8Z" style="fill: white"/>
          </g>
        </svg>
      </div>

        <section class="v-project-slug__wrap" v-if="showContent">
            <div class="g-grid-box"
            >
                <div class="g-grid-box__col-start--5        g-grid-box__col-end--span-16
                            g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-20
                            g-grid-box--sm__col-start--1    g-grid-box--sm__col-end--span-24"
                >
                    <div
                        class="v-project-slug__header"
                    >
                        <img class="v-project-slug__header__cover"
                             alt="cover image"
                             :src="currentProject?.imageCover[0].resize?.xxl"
                             v-if="currentProject"
                             :class="{'is-loaded': coverLoaded}"
                             @load="coverLoaded = true"
                        />
                        <div class="v-project-slug__header__cover v-project-slug__header__cover--loader"
                             :class="{'is-loaded': coverLoaded}"
                        />
                        <div class="v-project-slug__header__info rb-font-size--small">
                            <div>{{ currentProject?.imageCover[0].title }}</div>
                            <div v-if="currentProject?.imageCover[0].credit" >©{{currentProject?.imageCover[0].credit}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-grid-box g-grid-box--with-gutter--sm">

                <div class="g-grid-box__col-start--5        g-grid-box__col-end--span-16
                            g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-20
                            g-grid-box--sm__col-start--1    g-grid-box--sm__col-end--span-24"
                >
                    <div
                        class="v-project-slug__content"
                    >
                        <h1 >{{currentProject?.title}}</h1>

                        <article class="v-project-slug__content__article"
                                 v-html="currentProject?.htmlContent"
                        ></article>

                        <AppList v-if="currentProject?.listOfDetails"
                                 :listOfDetails="currentProject.listOfDetails"
                        />
                    </div>
                </div>
            </div>
            <div class="g-grid-box g-grid-box--with-gutter--sm">
                <div class="v-project-slug__gallery"
                     v-for="itemOfGalleryProject of currentProject?.galleryProject"
                     :class="{
                         'g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--1 g-grid-box--sm__col-end--span-24': itemOfGalleryProject.content.isfullwidth === 'false',
                         'g-grid-box__col-start--0 g-grid-box__col-end--span-24': itemOfGalleryProject.content.isfullwidth === 'true',
                         'is-full': itemOfGalleryProject.content.isfullwidth === 'true',
                     }"
                >
                    <template v-if="itemOfGalleryProject.type === 'image'">
                        <img class="v-project-slug__gallery__image"
                             :class="{
                              'is-verticale': (itemOfGalleryProject.images[0].width || 1) < (itemOfGalleryProject.images[0].height || 1)
                             }"
                             :src="itemOfGalleryProject.images[0]?.resize?.xxl"
                             :alt="itemOfGalleryProject.images[0]?.credit"
                        />
                        <div class="v-project-slug__gallery__info rb-font-size--small" >
                            <div>{{ itemOfGalleryProject.images[0]?.title }}</div>
                            <div v-if="itemOfGalleryProject.images[0]?.credit" >
                                <template v-if="itemOfGalleryProject.images[0]?.title">&nbsp;| </template>
                                ©{{itemOfGalleryProject.images[0].credit}}
                            </div>
                        </div>
                    </template>
                    <template v-else-if="itemOfGalleryProject.type === 'video'">
                        <vimeo
                            :video-i-d="itemOfGalleryProject.content.url"
                        />
                    </template>
                </div>

            </div>
        </section>
        <div class="v-project-slug__close-panel">
            <Menu :style="{
                    overflow: showContent ? 'hidden' : '',
                    pointerEvents: showContent ? 'none' : '',
                  }"
            />
        </div>
    </div>

</template>




<script setup lang="ts">
import {type Ref} from 'vue'
import type {IProjectContent} from "~/composables/api/projectContentBySlug";
import {fetchApiGetProjectByUID} from "~/fetchApi/fetchApiGET";
import {useNavigationIsShowingOnBottomOfPage} from "~/composables/useState";

const currentProject: Ref<null | IProjectContent> = ref(null)
const showContent = ref(true)
const coverLoaded = ref(false)

const projectsInfo = useProjectsInfo()
const currentSlug = useRoute().params.slug as string

const cursorPosition = ref({
  x: 0,
  y: 0,
})

const arrowDirection: Ref<-1 | 1 | 0> = ref(0)

const currentProjectIndex = computed(() => {
  if (!projectsInfo.value) return 0
  return projectsInfo.value.projects.findIndex(p => p.slug === currentSlug)
})

const previousProject = computed(() => {
  if (!projectsInfo.value || currentProjectIndex.value < 1) return null
  return projectsInfo.value.projects[currentProjectIndex.value - 1]
})

const nextProject = computed(() => {
  if (!projectsInfo.value) return null
  if (currentProjectIndex.value >= projectsInfo.value.projects.length - 1) return null
  return projectsInfo.value.projects[currentProjectIndex.value + 1]
})

function handleScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        showContent.value = false
        useNavigationIsShowingOnBottomOfPage().value = true
    }
}

onMounted(async () => {
    currentProject.value = await fetchApiGetProjectByUID(useRoute().params.slug as string)
    useCurrentProjectsInfo().value = currentProject.value
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

</script>





<style lang="scss" scoped >
.v-project-slug__wrap {
    padding-top: var(--rb-nav-height);
    margin-bottom: 100vh;
    position: relative;
    z-index: 1;
    background: white;
}

.v-project-slug__header {
    box-sizing: border-box;
    width: 100%;
    position: relative;
}

.v-project-slug__header__info {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 1em;
    left: 1em;
    color: white;
}

.v-project-slug__content {
    box-sizing: border-box;
}


.v-project-slug__details__item {
    display: flex;
}

.v-project-slug__gallery {
    margin-top: 1rem;
    position: relative;

    &:not(.is-full) {

        &:last-child {
            margin-bottom: 33vh;
        }
    }

    /**
    todo: test de largeur full en mobile
    */
    //@media (max-width: 900px) {
    //    //width: calc(100%  + ((100% / 24 *   -1) * 2) );
    //
    //    &.is-full {
    //        margin-left: calc(100% / 24 *   -1 - .25rem);
    //        margin-right: calc(100% / 24 *  -1 - .25rem);
    //    }
    //}
}

.v-project-slug__gallery__info {
    display: flex;
    justify-content: space-between;
    position: absolute;

    left: .5em;
    bottom: .5em;
    color: white;

    .is-full & {
        box-sizing: border-box;
        padding: 0 var(--rb-gutter-half);
    }

    .is-full img+& {
        position: absolute;
        bottom: var(--rb-gutter-half);
        left: 0;
        width: 100%;
        z-index: 1;
    }
}

.v-project-slug__gallery__image {
    display: block;
    width: 100%;
    object-fit: contain;

  &.is-verticale {
    width: 50%;
    object-position: top left;

    @media (max-width: 650px) {
        width: 100%;
    }
  }

}

.v-project-slug__header__cover {
    display: block;
    width: 100%;
    height: auto;
    transition: opacity .5s .5s ease-in-out;
    top: 0;
    left: 0;
  position: relative;

    &:not(.is-loaded) {
        opacity: 0;
        position: absolute;
    }

    &.v-project-slug__header__cover--loader {
        opacity: 1;
        top: 0;
        left: 0;
        aspect-ratio: 3/2;
        background: lightgray;
        width: 100%;
        position: relative;
        z-index: -1;

        &.is-loaded {
            position: absolute;
        }
    }
}

.v-project-slug__close-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-project-slug__project-navigation__link {
  height: 100%;
  width: calc(100% / 24 * 4);
  z-index: 10;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;

  div {
    white-space: nowrap;
    padding: 0 var(--rb-gutter);
    display: none;
    pointer-events: none;
  }

  &:hover {
    color: var(--rb-nav-blue);

    div {
      display: block;
    }
  }

}

.v-project-slug__project-navigation__link--before {
  right: 0;
  justify-content: flex-end;
  cursor: none;
}

.v-project-slug__project-navigation__link--next {
  left: 0;
  justify-content: flex-start;
  cursor: none;
}

.v-project-slug__project-navigation__cursor {
  transform-origin: left center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  mix-blend-mode: difference;
  width: 25px;
  height: auto;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: transform .25s ease-in-out, opacity .25s ease-in-out;

  .has-touch-gesture & {
    display: none;
  }
}
</style>




