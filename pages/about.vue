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
                    <h1 >About</h1>

                    <article class="v-about__content__article"
                             v-html="content"
                    ></article>
                </div>
            </div>
        </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'


const content =
    `
      <p>Rob van Leijsen (1983, Tilburg, The Netherlands) is a multidisciplinary designer and author based in Geneva, Switzerland. His practice mainly aims at commis- sioned and research projects in the cultural field, notably editorial design. He currently runs his own design studio and teaches at the visual communication department of HEAD – Genève. In 2012 he finished his master in design Spaces and communication at HEAD – Genève with Art Handling in Oblivion, a catalogue that assembles five art collections that have been stolen during wartime. Art Handling in Oblivion was subsequently published by edition fink in 2014, and se- lected — as part of the fink twice series —, as one of “The Most Beautiful Swiss Books of 2014” and it received an Honorary Appreciation at the “Best Book De- sign from all over the World” competition in Leipzig in 2015.</p>
      <p>In the spring of 2019 he presented The Drone Chronicles, an editorial diptych that documents the evolution and integration of drones in our society. The book is published by the Centre de la photographie Genève and Spector Books. His most recent book, Copy, Tweak, Paste: Methods of Appropriation in Re-enacted Artists’ Books, is a print adaptation of the original essay published online in JAR # 13 (Journal for Artistic Research). The bilingual publication (EN/FR) was pub- lished in 2020 by éditions clinamen.</p>
      <p>Through his self-initiated research projects, van Leijsen urges to reveal historical, social and geopolitical aspects that otherwise remain underexposed. The editori- al format fits his comparative and journalistic approach and meticulous arrange- ments of data and archive material. It is on the fine line between art, design and research that he positions himself and that he is most comfortable.</p>
    `

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

    padding-left: 1rem;
    padding-right: 1rem
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
