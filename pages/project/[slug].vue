<template>
    <section
        class="v-project-slug"
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
                        :src="currentProject?.imageCover.url"
                    />
                    <div class="v-project-slug__header__info">
                        <div>{{ currentProject?.imageCover.title }}</div>
                        <div v-if="currentProject?.imageCover.credit" >©{{currentProject?.imageCover.credit}}</div>
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
                        <div class="g-grid-box__col-end--span-12">{{liste.title}}</div>
                        <div class="g-grid-box__col-end--span-12">{{liste.content}}</div>
                    </div>
                </div>
            </div>

            <div class="v-project-slug__gallery"
                 v-for="itemOfGalleryProject of currentProject?.galleryProject"
                :class="{
                     'g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22': !itemOfGalleryProject.isFullWidth,
                     'g-grid-box__col-start--0 g-grid-box__col-end--span-24': itemOfGalleryProject.isFullWidth,
                     'is-full': itemOfGalleryProject.isFullWidth,
                 }"
            >
                <template v-if="(itemOfGalleryProject as IApiImageOfProject).url">
                    <img class="v-project-slug__gallery__image"
                         :src="(itemOfGalleryProject as IApiImageOfProject).url"
                         :alt="itemOfGalleryProject.credit"
                    />
                </template>
                <template v-else-if="(itemOfGalleryProject as IApiVideo).videoID">
                    <vimeo
                        :video-i-d="(itemOfGalleryProject as IApiVideo).videoID"
                    />
                </template>
                <div class="v-project-slug__gallery__info" >
                    <div>{{ itemOfGalleryProject.title }}</div>
                    <div v-if="itemOfGalleryProject.credit" >©{{itemOfGalleryProject.credit}}</div>
                </div>
            </div>

        </div>

    </section>
</template>




<script setup lang="ts">
import {type Ref} from 'vue'
import type {IApiImageOfProject} from "~/server/api/projectsInfo";
import type {IApiVideo, IProjectContent} from "~/server/api/projectContentBySlug";
import {useFetch} from "#app";
import {fetchApiGetProjectByUID} from "~/fetchApi/fetchApiGetProjects";

const currentProject: Ref<null | IProjectContent> = ref(null)

onMounted(async () => {
    currentProject.value = await fetchApiGetProjectByUID(useRoute().params.slug as string)
})

</script>





<style lang="scss" scoped >
.v-project-slug {
    padding-top: var(--rb-nav-height);
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
