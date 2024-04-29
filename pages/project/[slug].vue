<template>
    <section class="v-project-slug"
    >
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
                         :src="currentProject?.imageCover[0].resize.large"
                         v-if="currentProject"
                    />
                    <div class="v-project-slug__header__cover v-project-slug__header__cover--loader"
                         v-else
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
                        <div class="g-grid-box__col-end--span-12 g-grid-box--reg__col-end--span-8   g-grid-box--sm__col-end--span-24    v-project-slug__content__list__item" v-html="liste.name" ></div>
                        <div class="g-grid-box__col-end--span-12 g-grid-box--reg__col-end--span-16  g-grid-box--sm__col-end--span-24   v-project-slug__content__list__item" v-html="liste.value" ></div>
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
                         :src="itemOfGalleryProject.images[0]?.resize.large"
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
</template>




<script setup lang="ts">
import {type Ref} from 'vue'
import type {IApiBlockImage, IApiImageOfProject} from "~/server/api/projectsInfo";
import type {IApiVideo, IProjectContent} from "~/server/api/projectContentBySlug";
import {fetchApiGetProjectByUID} from "~/fetchApi/fetchApiGET";

const currentProject: Ref<null | IProjectContent> = ref(null)

onMounted(async () => {
    currentProject.value = await fetchApiGetProjectByUID(useRoute().params.slug as string)
})

</script>





<style lang="scss" scoped >
.v-project-slug {
    padding-top: var(--rb-nav-height);
    //padding-bottom: 50vh;
}

.v-project-slug__header {
    box-sizing: border-box;
    width: 100%;
}

.v-project-slug__header__info {
    display: flex;
    justify-content: space-between;
}

.v-project-slug__content {
    box-sizing: border-box;
}

.v-project-slug__content__article {
}

.v-project-slug__content__list {
    margin-top: .25rem;
    margin-bottom: .25rem;
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
}

.v-project-slug__header__cover {
    display: block;
    width: 100%;
    height: auto;

    &.v-project-slug__header__cover--loader {
        aspect-ratio: 3/2;
        background: lightgray;
    }
}
</style>

<style lang="scss">
.v-project-slug__content__list__item {
    & > *:first-child {
        margin-top: .25rem;
    }

    & > *:last-child {
        margin-bottom: 0;
    }
}
</style>
