<template>
    <section
        class="v-about"
        :class="{
            'with-map': content?.data?.mapImage_about,
        }"
    >
        <div class="g-grid-box g-grid-box--with-gutter--sm"
        >
            <div class="g-grid-box__col-start--5        g-grid-box__col-end--span-14
                        g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-18
                        g-grid-box--sm__col-start--1    g-grid-box--sm__col-end--span-24"
            >
                <div
                    class="v-about__content"
                >
                    <article class="v-about__content__article"
                             v-if="content"
                             v-html="content.data?.textabout"
                    ></article>
                </div>
            </div>
            <div class="g-grid-box__col-start--5        g-grid-box__col-end--span-14
                        g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-18
                        g-grid-box--sm__col-start--1    g-grid-box--sm__col-end--span-24"
            >
                <AppList v-if="content?.data?.listOfDetails_about"
                         :listOfDetails="content.data.listOfDetails_about"/>
            </div>
        </div>


        <div
            class="v-about__map"
            v-if="content?.data?.mapImage_about"
        >
            <img alt="image de l'atelier"
                 :src="content.data.mapImage_about.resize?.xxl"
                 :style="{
                     objectPosition: content?.data?.mapImage_about.focus,
                 }"
            />
        </div>

    </section>
</template>





<script setup lang="ts">

import {fetchApiGetAbout} from "~/fetchApi/fetchApiGET";
import type {IApiAbout} from "~/composables/api/projectContentBySlug";
import type {Ref} from "vue";

const content: Ref<null |IApiAbout> = ref(null)

onMounted(async () => {
    content.value = await fetchApiGetAbout()
})

</script>





<style lang="scss" scoped >
.v-about {
    padding-top: var(--rb-nav-height);
    background: white;
    padding-bottom: 1rem;

    &.with-map {
        margin-bottom: 66vh;
    }
}

.v-about__header {
    box-sizing: border-box;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem
}

.v-about__content {
    box-sizing: border-box;
}

.v-about__content__article {
}

.v-about__content__list {
    margin-top: .5rem;
    margin-bottom: .5rem;
}

.v-about__gallery {
    margin-top: 1rem;

    &:not(.is-full) {
        padding-left: 1rem;
        padding-right: 1rem;

        &:last-child {
            margin-bottom: 33vh;
        }
    }

}

.v-about__gallery__image {
    display: block;
    width: 100%;
}

.v-about__header__cover {
    display: block;
    width: 100%;
    height: auto;
}

.v-about__map {
    box-sizing: border-box;
    position: fixed;
    top: var(--rb-nav-height);
    left: 0;
    width: 100%;
    height: calc( 100vh - var(--rb-nav-height));
    z-index: -1;

    > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
