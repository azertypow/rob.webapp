<template>
    <div class="v-vimeo"
         style="padding:100% 0 0 0;position:relative;">
        <iframe :src="`https://player.vimeo.com/video/${videoID}?color=0000C8&title=0&byline=0&portrait=0`"
                frameborder="0"
                allow="fullscreen; picture-in-picture" allowfullscreen/>
    </div>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    videoID?: string
}>()

</script>





<style lang="scss" scoped >
.v-vimeo {
    padding: 100%;
}
</style>
