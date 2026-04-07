<template>
    <div class="v-project-slug">
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
                        <div class="v-project-slug__header__info">
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

                        <div class="v-project-slug__content__list g-grid-box"
                             v-for="liste of currentProject?.listOfDetails" >
                            <div class="g-grid-box__col-end--span-8     g-grid-box--sm__col-end--span-24   v-project-slug__content__list__item g-child-no-margin" v-html="liste.name" ></div>
                            <div class="g-grid-box__col-end--span-16    g-grid-box--sm__col-end--span-24   v-project-slug__content__list__item g-child-no-margin" v-html="liste.value" ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-grid-box g-grid-box--with-gutter--sm">
                <div class="v-project-slug__gallery"
                     v-for="itemOfGalleryProject of currentProject?.galleryProject"
                    :class="{
                         'g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22': itemOfGalleryProject.content.isfullwidth === 'false',
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
                        <div class="v-project-slug__gallery__info" >
                            <div>{{ itemOfGalleryProject.images[0]?.title }}</div>
                            <div v-if="itemOfGalleryProject.images[0]?.credit" >©{{itemOfGalleryProject.images[0].credit}}</div>
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
import type {IApiBlockImage, IApiImageOfProject} from "~/composables/api/projectsInfo";
import type {IApiVideo, IProjectContent} from "~/composables/api/projectContentBySlug";
import {fetchApiGetProjectByUID} from "~/fetchApi/fetchApiGET";

const currentProject: Ref<null | IProjectContent> = ref(null)
const router = useRouter()
const showContent = ref(true)
const coverLoaded = ref(false)

function handleScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        showContent.value = false
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
}

.v-project-slug__content {
    box-sizing: border-box;
}

.v-project-slug__content__list {
    margin-top: .15rem;
    margin-bottom: .15rem;

  @media (max-width: 900px) {
    margin: 0;
    & + & {
      margin-top: 1rem;
    }
  }
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
}

.v-project-slug__gallery__info {
    display: flex;
    justify-content: space-between;

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
  }
}

.v-project-slug__header__cover {
    display: block;
    width: 100%;
    height: auto;
    transition: opacity .5s .5s ease-in-out;
    top: 0;
    left: 0;

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
</style>
