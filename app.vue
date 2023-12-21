<template>
    <div class="v-app">
        <div
            class="v-app__nav-box"
        >
            <AppNav/>
        </div>

        <div
            class="v-app__menu-box"
            v-if="useMenuIsOpen().value"
        >
            <Menu/>
        </div>

        <NuxtPage/>
    </div>
</template>

<style lang="scss" scoped>
.v-app {
    padding-left: var(--rb-gutter);
    padding-right: var(--rb-gutter);
}

.v-app__nav-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000000;
}

.v-app__menu-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}
</style>


<script lang="ts" setup>
import type {IApiProjectsInfo} from "~/server/api/projectsInfo";

onMounted(async () => {
    const projectInfo = await useFetch('/api/projectsInfo')

    useState<IApiProjectsInfo[]>('projectsInfo', () => {return projectInfo.data.value || []})
})


</script>
