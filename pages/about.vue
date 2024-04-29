<template>
    <section
        class="v-about"
    >
        <div class="g-grid-box"
        >
            <div class="g-grid-box__col-start--5 g-grid-box__col-end--span-14 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-18 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22"
            >
                <div
                    class="v-about__content"
                >
                    <h1>About</h1>

                    <article class="v-about__content__article"
                             v-if="content"
                             v-html="content.data?.textabout"
                    ></article>
                </div>
            </div>
        </div>

    </section>
</template>





<script setup lang="ts">

import {fetchApiGetAbout} from "~/fetchApi/fetchApiGET";
import type {IApiAbout} from "~/server/api/projectContentBySlug";
import type {Ref} from "vue";

const content: Ref<null |IApiAbout> = ref(null)

onMounted(async () => {
    content.value = await fetchApiGetAbout()
})

</script>





<style lang="scss" scoped >
.v-about {
    padding-top: var(--rb-nav-height);
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
</style>
