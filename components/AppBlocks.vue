<template>
    <template v-for="block of blocks" >
        <AppList v-if="block.type === 'array-list'"
                 :listOfDetails="block.content.listofdetails"
        />
        <div v-else-if="block.type === 'text'"
             v-html="block.content.text"
        />
    </template>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import type {IApiBlockArrayList, IApiBlockText} from "~/composables/api/projectsInfo";

const props = defineProps<{
    blocks: (IApiBlockArrayList | IApiBlockText)[]
}>()
</script>





<style lang="scss" scoped >
.v-app-blocks {
}
</style>
