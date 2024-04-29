<template>
    <section class="v-project-slug"
    >
        <div class="g-grid-box"
        >
            <div class="g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22"
            >
                <div
                    class="v-project-slug__header"
                >
                    <img
                        alt="cover image"
                        class="v-project-slug__header__cover"
                        :src="currentProject?.imageCover[0].resize.xxl"
                    />
                    <div class="v-project-slug__header__info">
                        <div>{{ currentProject?.imageCover[0].title }}</div>
                        <div v-if="currentProject?.imageCover[0].credit" >©{{currentProject?.imageCover[0].credit}}</div>
                    </div>
                </div>
            </div>

            <div class="g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22"
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
                        <div class="g-grid-box__col-end--span-12 v-project-slug__content__list__item" v-html="liste.name" ></div>
                        <div class="g-grid-box__col-end--span-12 v-project-slug__content__list__item" v-html="liste.value" ></div>
                    </div>
                </div>
            </div>

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
                         :src="itemOfGalleryProject.images[0]?.resize.xxl"
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
    padding-left: 1rem;
    padding-right: 1rem
}

.v-project-slug__header__info {
    display: flex;
    justify-content: space-between;
}

.v-project-slug__content {
    box-sizing: border-box;

    padding-left: 1rem;
    padding-right: 1rem
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
        padding-left: 1rem;
        padding-right: 1rem;

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
}
</style>

<style lang="scss">
.v-project-slug__content__list__item {
    & > *:first-child {
        margin-top: 0;
    }

    & > *:last-child {
        margin-bottom: 0;
    }
}
</style>
