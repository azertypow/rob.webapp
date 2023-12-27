<template>
    <section
        class="v-project-slug"
    >
        <div class="g-grid-box"
        >
            <div class="g-grid-box__col-start--5 g-grid-box__col-end--span-16"
            >
                <div
                    class="v-project-slug__header"
                >
                    <img
                        alt="cover image"
                        class="v-project-slug__header__cover"
                        :src="currentProject?.imageCover.url"
                    />
                </div>
            </div>

            <div class="g-grid-box__col-start--5 g-grid-box__col-end--span-16"
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
                 v-for="imageProject of currentProject?.ArrayOfImagesProject"
                :class="{
                     'g-grid-box__col-start--5 g-grid-box__col-end--span-16': !imageProject.isFullWidth,
                     'g-grid-box__col-start--0 g-grid-box__col-end--span-24': imageProject.isFullWidth,
                     'is-full': imageProject.isFullWidth,
                 }"
            >
                <img class="v-project-slug__gallery__image"
                     :src="imageProject.url"
                     :alt="imageProject.credit"
                />
            </div>

        </div>

    </section>
</template>




<script setup lang="ts">
import {defineProps, type Ref} from 'vue'
import type {IApiProjectsInfo} from "~/server/api/projectsInfo";
import type {IProjectContent} from "~/server/api/projectContentBySlug";
import {useFetch} from "#app";

const props = defineProps<{
    message?: string
}>()

const projectSlug = useRoute().params.slug

const currentProject: Ref<null | IProjectContent> = ref(null)

onMounted(async () => {
    const projectInfo = await useFetch('/api/projectContentBySlug')

    currentProject.value = projectInfo.data.value
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

.v-project-slug__content {
    box-sizing: border-box;

    padding-left: 1rem;
    padding-right: 1rem
}

.v-project-slug__content__article {
}

.v-project-slug__content__list {
    margin-top: .5rem;
    margin-bottom: .5rem;
}

.v-project-slug__gallery {
    margin-top: 1rem;

    &:not(.is-full) {
        padding-left: 1rem;
        padding-right: 1rem;

        &:last-child {
            margin-bottom: 33vh;
        }
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
