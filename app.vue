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
import type {IApiListOfProjectsInfo, IApiProjectInfo} from "~/server/api/projectsInfo";
import {useCurrentProjectsInfo, useMenuIsOpen} from "~/composables/useState";
import {fetchApiGetProjects} from "~/fetchApi/fetchApiGET";
const projectsInfo = useState<IApiListOfProjectsInfo>('projectsInfo')
const currentProjectsInfo = useCurrentProjectsInfo()

onMounted(async () => {
    const projectInfo = await fetchApiGetProjects()

    useState<IApiListOfProjectsInfo>('projectsInfo', () => {
        return projectInfo || {projects: []}}
    )
})

useRouter().beforeEach((to, from, next) => {
    const slug = to.params.slug

    if(typeof slug === "string") {
        currentProjectsInfo.value = findProjectInfoBySlug(projectsInfo.value.projects, slug) || null
    } else {
        currentProjectsInfo.value = null
    }

    useMenuIsOpen().value = false

    next()
})


</script>
