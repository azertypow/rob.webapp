<template>
    <section
        class="v-app-nav"
        :class="{
            'color-for-image-is-black': colorForGallery === 'black',
            'is-home': useRouter().currentRoute.value.path === '/',
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


        <button
            class="v-app-nav__nav"
            @click="menuIsOpen = !menuIsOpen"
        >
                <img alt="close menu"
                     v-if="menuIsOpen"
                     src="../assets/ui/close_FILL0_wght400_GRAD0_opsz24.svg"
                />
                <img alt="open menu"
                     v-else
                     src="../assets/ui/menu_FILL0_wght400_GRAD0_opsz24.svg"
                />
        </button>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const menuIsOpen = useMenuIsOpen()
const colorForGallery = useColorForGallery()

</script>





<style lang="scss" scoped >
.v-app-nav {
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
    color: black;
    transition: background-position 1s ease-in-out;
    background: linear-gradient(180deg, rgb(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0)) 0 0 no-repeat;

    &.is-home {
        color: white;
        background-position: 0 calc(-1 * var(--rb-nav-height));

        &.color-for-image-is-black {
            color: black;
        }
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
    background: transparent;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;

    > img {
        height: 2rem;
    }
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
