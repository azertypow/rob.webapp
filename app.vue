<template>
    <div class="v-app">
        <div
            class="v-app__nav-box"
        >
            <AppNav/>
        </div>

        <NuxtPage/>
    </div>
</template>

<style lang="scss" scoped>
.v-app {

}

.v-app__nav-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000000;
}
</style>
