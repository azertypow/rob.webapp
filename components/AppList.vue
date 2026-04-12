<template>
    <div class="v-app-list v-app-list g-grid-box"
         v-for="liste of listOfDetails" >
        <div class="g-grid-box__col-end--span-8     g-grid-box--sm__col-end--span-24   v-app-list__item g-child-no-margin" v-html="liste.name" ></div>
        <div class="g-grid-box__col-end--span-16    g-grid-box--sm__col-end--span-24   v-app-list__item g-child-no-margin" v-html="liste.value" ></div>
    </div>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    listOfDetails: {name: string, value: string}[]
}>()
</script>





<style lang="scss" scoped >
.v-app-list {
    margin-top:     .25rem;
    margin-bottom:  .25rem;

    @media (max-width: 900px) {
        margin: 0;
        & + & {
            margin-top: 1rem;
        }
    }
}

.v-app-list__item {
    &:nth-child(2) {
        max-width: 27em;
    }
}
</style>
