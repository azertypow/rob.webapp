<template>
    <section
        class="v-contact"
        :class="{
            'with-map': content?.data?.mapImage,
        }"
    >
        <div class="g-grid-box g-grid-box--with-gutter--sm"
        >
            <div class="g-grid-box__col-start--5        g-grid-box__col-end--span-14
                        g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-18
                        g-grid-box--sm__col-start--1    g-grid-box--sm__col-end--span-24"
            >
                <div
                    class="v-contact__content"
                >
                    <article class="v-contact__content__article"
                             v-html="content?.data?.textcontact"
                    ></article>
                </div>
            </div>
        </div>
        <div
            class="v-contact__map"
            v-if="content?.data?.mapImage"
        >
            <img alt="image de l'atelier"
                 :src="content.data.mapImage.resize?.xxl"
                 :style="{
                     objectPosition: content?.data?.mapImage.focus,
                 }"
            />
        </div>
    </section>
</template>





<script setup lang="ts">
import type {IApiContact} from "~/composables/api/projectContentBySlug";
import {fetchApiGetContact} from "~/fetchApi/fetchApiGET";
import type {Ref} from "vue";

const content: Ref<null |IApiContact> = ref(null)

onMounted(async () => {
    content.value = await fetchApiGetContact()
})

</script>





<style lang="scss" scoped >
.v-contact {
    padding-top: var(--rb-nav-height);
    background: white;
    padding-bottom: 1rem;

    &.with-map {
        margin-bottom: 66vh;
    }

    @media (max-width: 900px) {
        padding-bottom: 0;
    }
}

.v-contact__header {
    box-sizing: border-box;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem
}

.v-contact__content {
    box-sizing: border-box;
}

.v-contact__map {
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

<style lang="scss">
.v-contact__content {
    & > *:first-child {
        margin-top: 0;
    }

    & > *:last-child {
        margin-bottom: 0;
    }
}
</style>
