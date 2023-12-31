<template>
    <div class="v-vimeo">
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
    padding-top: 56.25%;
    position: relative;
    width: 100%;
    overflow: hidden;
    background: black;
}
iframe {
    display: block;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
