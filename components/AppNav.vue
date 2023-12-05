<template>
    <section
        class="v-app-nav"
        :class="{
            'color-for-image-is-black': colorForGallery === 'black'
        }"
    >
        <div
            class="v-app-nav__left"
        >
            <nuxt-link
                class="v-app-nav__left__site-title"
                to="/"
            >Rob van Leijsen</nuxt-link>
            <div
                class="v-app-nav__left__project-title"
                v-if="useRoute().params.slug"
            >
                {{useRoute().params.slug}}
            </div>
        </div>


        <div
            class="v-app-nav__nav"
            @click="menuIsOpen = !menuIsOpen"
        >
            <div v-if="menuIsOpen">x</div>
            <div v-else>=</div>
        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const menuIsOpen = useMenuIsOpen()
const colorForGallery = useColorForGallery()

</script>





<style lang="scss" scoped >
.v-app-nav {
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: var(--rb-nav-height);
    padding-left: var(--rb-gutter);
    padding-right: var(--rb-gutter);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    color: white;

    &.color-for-image-is-black {
        color: black;
    }
}

.v-app-nav__nav {
    width: var(--rb-nav-height);
    height: var(--rb-nav-height);
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-app-nav__left {
    display: grid;
    grid-template-columns: calc(100fr / 12 * 4) calc(100fr / 12 * 8);
    width: 50%;
}

.v-app-nav__left__site-title {
    display: block;
    text-decoration: none;
    color: inherit;
}
</style>
