<template>
    <section class="v-app-nav"
        :class="{
            'color-for-image-is-black': colorForGallery === 'black',
            'is-home': useRouter().currentRoute.value.path === '/',
        }"
    >
        <div class="v-app-nav__left"
        >
            <nuxt-link class="v-app-nav__left__site-title"
                       to="/"
                       @click="() => useMenuIsOpen().value = false"
            >Rob van Leijsen</nuxt-link>
            <div class="v-app-nav__left__project-title"
            >
                <template
                    v-if="!useMenuIsOpen().value && currentProjectsInfo"
                >
                   {{ useCurrentProjectsInfo().value.title }}
                </template>
                <template v-else-if="useMenuIsOpen().value || useRouter().currentRoute.value.path === '/about'">
                    Graphic design
                </template>
            </div>
        </div>

        <div class="v-app-nav__right"
        >
            <nuxt-link href="/about"     >About</nuxt-link>
            <nuxt-link href="/contact"   >Contact</nuxt-link>
            <button class="v-app-nav__nav"
                @click="menuIsOpen = !menuIsOpen"
            >
                    <img alt="close menu"
                         v-if="menuIsOpen"
                         src="../assets/ui/close_FILL0_wght400_GRAD0_opsz24.svg"
                    />
                    <svg v-else
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="0 -960 960 960" ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
        </div>
    </section>
</template>





<script setup lang="ts">
import {useCurrentProjectsInfo, useMenuIsOpen} from "~/composables/useState";

const menuIsOpen = useMenuIsOpen()
const colorForGallery = useColorForGallery()
const currentProjectsInfo = useCurrentProjectsInfo()



</script>





<style lang="scss" scoped >
.v-app-nav {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: var(--rb-nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    color: black;
    transition: background-position 1s ease-in-out, color 1s 1s ease-in-out, stroke 1s 1s ease-in-out;
    background: linear-gradient(180deg, rgb(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0)) 0 0 no-repeat;

    &.is-home {
        color: white;
        background-position: 0 calc(-1 * var(--rb-nav-height));

        svg * {
            transition: fill 1s 1s ease-in-out;
            fill: white !important;
        }

        &.color-for-image-is-black {
            color: black;

            svg * {
                fill: black !important;
            }
        }
    }


}

.v-app-nav__nav {
    width: auto;
    height: auto;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;

    > img, > svg {
        height: 2rem;
        width: auto;
    }
}

.v-app-nav__left {
    display: flex;
    width: 50%;

    @media (max-width: 900px) {
        background: red;
        align-items: flex-start;
        flex-direction: column;
    }
}

.v-app-nav__right {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;

    > * {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 900px) {
        align-items: flex-start;
    }
}

.v-app-nav__left__site-title {
    display: block;
    text-decoration: none;
    color: inherit;
    width: calc(100% / 3 * 1);
    box-sizing: border-box;
    padding-left: 1rem;

    @media (max-width: 900px) {
        width: auto;
    }
}

.v-app-nav__left__project-title {
    display: block;
    width: calc(100% / 3 * 2);
    white-space: nowrap;
    box-sizing: border-box;
    padding-left: 1rem;
    height: 1rem;
}
</style>
