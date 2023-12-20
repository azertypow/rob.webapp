<template>
    <section
        class="v-project-slug"
    >
        <div
            class="v-project-slug__header"
        >
            <img
                class="v-project-slug__header__cover"
                :src="currentProject.imageCover.url"
            />
        </div>
        <div
            class="v-project-slug__content"
        >
            <p>url: {{projectSlug}}</p>
            <h1>{{currentProject.title}}</h1>

            <article>
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <h2>Lorem Ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <h3>Lorem Ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <h4>Lorem Ipsum</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <h5>Lorem Ipsum</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <h6>Lorem Ipsum</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget felis congue ullamcorper. Integer sed dapibus turpis. Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.
                </p>

                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed ut purus eget felis congue ullamcorper.</li>
                    <li>Integer sed dapibus turpis.</li>
                    <li>Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.</li>
                </ul>

                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed ut purus eget felis congue ullamcorper.</li>
                    <li>Integer sed dapibus turpis.</li>
                    <li>Donec tristique mi eget eros tincidunt, id rutrum leo accumsan.</li>
                </ol>
            </article>
        </div>
    </section>
</template>




<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps<{
    message?: string
}>()

const projectsInfoData = [
    {
        slug: 'project-1',
        title: 'titre de projet premier',
        imageCover: {
            url: '/rob.webapp/images/compress/01.jpg',
            credit: 'Jacques Martin',
            titre: 'titre image 01',
            parentProjectTitle: 'titre de projet',
            textColor: 'white',
            isFullWidth: true,
        },
        imageCoverForIndex: {
            url: '/rob.webapp/images/compress/01.jpg',
            credit: 'Jacques Martin',
            titre: 'titre image 01',
            parentProjectTitle: 'titre de projet',
            textColor: 'white',
            isFullWidth: true,
        },
        ArrayOfImagesProject: [
            {
                url: '/rob.webapp/images/compress/02.jpg',
                titre: 'bonjour image 01 sans crédit',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            {
                url: '/rob.webapp/images/compress/03.jpg',
                credit: 'Paul Hero',
                titre: '',
                parentProjectTitle: 'titre de projet',
                textColor: 'black',
                isFullWidth: true,
            },
        ],
        ArrayOfImagesCarousel: [
            {
                url: '/rob.webapp/images/compress/04.jpg',
                credit: 'Jasmine Dugens',
                titre: 'Encore un titre',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            {
                url: '/rob.webapp/images/compress/06.jpg',
                credit: 'Nathalie Marko',
                titre: 'Hello Hello',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
        ],
    },
    {
        slug: 'project-2',
        title: 'titre du second projet',
        imageCover: {
            url: '/rob.webapp/images/compress/06.jpg',
            titre: 'Titre',
            parentProjectTitle: 'titre du second projet',
            isFullWidth: true,
            textColor: 'black',
        },
        imageCoverForIndex: {
            url: '/rob.webapp/images/compress/06.jpg',
            credit: 'Jacques Martin',
            titre: 'titre image 01',
            parentProjectTitle: 'titre de projet',
            textColor: 'white',
            isFullWidth: true,
        },
        ArrayOfImagesProject: [
            {
                url: '/rob.webapp/images/compress/07.jpg',
                titre: 'bien bien',
                parentProjectTitle: 'titre du second projet',
                textColor: 'white',
                isFullWidth: true,
            },
        ],
        ArrayOfImagesCarousel: [
            {
                url: '/rob.webapp/images/compress/07.jpg',
                titre: 'hello titre',
                parentProjectTitle: 'titre du second projet',
                textColor: 'black',
                isFullWidth: true,
            },
            {
                url: '/rob.webapp/images/compress/08.jpg',
                titre: 'hello titre',
                parentProjectTitle: 'titre du second projet',
                textColor: 'white',
                isFullWidth: true,
            },
        ],
    }
]


const projectsInfo: ComputedRef<IApiProjectsInfo[]> = computed(() =>
    projectsInfoData.data.value || []
)

const projectSlug = useRoute().params.slug

const currentProject: ComputedRef<IApiProjectsInfo> = computed(() => {
    return projectsInfo.value.find(project => project.slug === projectSlug)
})

</script>





<style lang="scss" scoped >
.v-project-slug {
    padding-top: var(--rb-nav-height);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 50vh;
}

.v-project-slug__header {
    box-sizing: border-box;
    width: calc(100% / 24 * 16);
    padding-left: var(--rb-gutter-half);
}

.v-project-slug__content {
    box-sizing: border-box;
    width: calc(100% / 24 * 16);
    padding-left: var(--rb-gutter-half);
}

.v-project-slug__header__cover {
    display: block;
    width: 100%;
    height: auto;
}

h1 {
    font-size: 2rem;
    line-height: 2rem;
}

h2 {
    font-size: 1.75rem;
    line-height: 1.75rem;
}

h3 {
    font-size: 1.5rem;
    line-height: 1.5rem;
}

h4 {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
}

h5 {
    font-size: 2rem;
    line-height: 2rem;
}
</style>
