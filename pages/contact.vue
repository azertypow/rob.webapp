<template>
    <section
        class="v-contact"
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
                    <h1>Contact</h1>

                    <article class="v-contact__content__article"
                             v-html="content?.data?.textcontact"
                    ></article>
                </div>
            </div>
        </div>
        <div class="g-grid-box">
            <div class= "
                            g-grid-box__col-start--5        g-grid-box__col-end--span-14
                            g-grid-box--reg__col-start--3  g-grid-box--reg__col-end--span-18
                            g-grid-box--sm__col-start--1   g-grid-box--sm__col-end--span-24
                        ">
                <div
                    class="v-contact__map"
                >
                    <a class="v-contact__map__link"
                       target="_blank"
                       href="https://www.google.com/maps/place/Rue+des+Vieux-Grenadiers+10,+1205+Gen%C3%A8ve/@46.1988881,6.1379562,17z/data=!4m6!3m5!1s0x478c64d53f755ff9:0x1ddd695830138867!8m2!3d46.1989327!4d6.1381708!16s%2Fg%2F11c5b46jtc?entry=ttu"
                    >
                        <img alt="image de carte pour représenter l\'emplacement de l\'atelier"
                             :src="content?.data?.mapImage?.resize?.large"
                        />
                    </a>
                </div>
            </div>
        </div>

    </section>
</template>





<script setup lang="ts">
import type {IApiContact} from "~/server/api/projectContentBySlug";
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
    padding-bottom: 1rem;

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
    padding-top: 2rem;
}

.v-contact__map__link {
    > img {
        display: block;
        width: 100%;
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
