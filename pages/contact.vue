<template>
    <section
        class="v-about"
    >
        <div class="g-grid-box"
        >
            <div class= "
                            g-grid-box__col-start--5        g-grid-box__col-end--span-16
                            g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-20
                            g-grid-box--sm__col-start--2    g-grid-box--sm__col-end--span-22
                        "
            >
                <div
                    class="v-contact__content"
                >
                    <h1 >Contact</h1>
                </div>
            </div>
            <div class= "
                            g-grid-box__col-start--5        g-grid-box__col-end--span-8
                            g-grid-box--reg__col-start--3   g-grid-box--reg__col-end--span-10
                            g-grid-box--sm__col-start--2    g-grid-box--sm__col-end--span-11
                        ">
                <div
                    class="v-contact__content"
                >
                    <article class="v-contact__content__text"
                             v-html="content"
                    ></article>
                </div>
            </div>
            <div class= "
                            g-grid-box__col-start--13        g-grid-box__col-end--span-16
                            g-grid-box--reg__col-start--13  g-grid-box--reg__col-end--span-10
                            g-grid-box--sm__col-start--2   g-grid-box--sm__col-end--span-11
                        ">
                <div
                    class="v-contact__map"
                >
                    <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Rue+des+Vieux-Grenadiers+10,+1205+Gen%C3%A8ve/@46.1988881,6.1379562,17z/data=!4m6!3m5!1s0x478c64d53f755ff9:0x1ddd695830138867!8m2!3d46.1989327!4d6.1381708!16s%2Fg%2F11c5b46jtc?entry=ttu"
                    >

                    </a>
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

.v-contact__header {
    box-sizing: border-box;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem
}

.v-contact__content {
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
}

.v-contact__map {
    box-sizing: border-box;
    padding-left: 1rem;
    padding-right: 1rem;
}

.v-contact__content__text {
}
</style>
