<template>
    <section class="v-index" >
        <div
            class="v-index__carousel"
            v-if="projectsInfoData"
        >
            <div
                class="v-index__carousel__nav-to-left"
                @click="previousGalleryItem"
                :style="{
                     backgroundImage: `url(${allCarouselImages[previousGalleryIndex].url})`
                 }"
            >left {{previousGalleryIndex}}
                / {{galleryIndex}}
                / {{nextGalleryIndex}}
            </div>
            <div class="v-index__carousel__nav-to-right"
                 @click="nextGalleryItem"
                 :style="{
                     backgroundImage: `url(${allCarouselImages[nextGalleryIndex].url})`
                 }"
            >righ</div>

            <div
                class="v-index__carousel__title"
                :style="{
                    color: colorForGallery,
                }"
            >{{allCarouselImages[galleryIndex].parentProjectTitle}}</div>

            <div
                class="v-index__carousel__counter"
                :style="{
                    color: colorForGallery,
                }"
            >{{galleryIndex + 1}} / {{allCarouselImages.length + 1}}</div>


            <template
                v-for="(carouselImage, index) of allCarouselImages"
            >
                <transition
                    name="gallery"
                >
                    <div
                        class="v-index__carousel__item"
                        v-if="index === galleryIndex"
                    >
                        <img
                            class="v-index__carousel__item__img"
                            alt=""
                            :src="carouselImage.url"
                        />
                    </div>
                </transition>
            </template>
        </div>
    </section>
</template>





<script lang="ts" setup>

import type {ComputedRef} from "vue";
import type {IApiImage, IApiImageOfProject, IApiProjectsInfo} from "~/server/api/projectsInfo";

const colorForGallery = useColorForGallery()

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

const allCarouselImages = computed(() => {
    return projectsInfo.value.reduce((previousValue, currentValue) => {
        return previousValue.concat(
            currentValue.ArrayOfImagesCarousel.reduce((previousValue1, currentValue1) => {
                return previousValue1.concat(currentValue1);
            }, [] as IApiImageOfProject[])
        )
    }, [] as IApiImageOfProject[])
})

const galleryIndex = ref(0)
let intervalID: number | undefined = undefined

onMounted(() => {
    startInterval()
})


function startInterval() {
    intervalID = window.setInterval(function() {
        nextGalleryItem()
    }, 5_000);
}

const previousGalleryIndex = computed(() => {
    const previousGalleryIndexToReturn = galleryIndex.value - 1
    if( previousGalleryIndexToReturn < 0 ) return allCarouselImages.value.length - 1
    return previousGalleryIndexToReturn
})

const nextGalleryIndex = computed(() => {
    const nextGalleryIndexToReturn = galleryIndex.value + 1
    if( nextGalleryIndexToReturn >= allCarouselImages.value.length ) return 0
    return nextGalleryIndexToReturn
})

// todo: code optimisation (click function for clearInterfvale and ducplication code)
function nextGalleryItem() {
    window.clearInterval(intervalID)
    galleryIndex.value++
    if(galleryIndex.value >= allCarouselImages.value.length) galleryIndex.value = 0
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].textColor
    startInterval()
}

// todo: code optimisation (click function for clearInterfvale and ducplication code)
function previousGalleryItem() {
    window.clearInterval(intervalID)
    galleryIndex.value--
    if(galleryIndex.value < 0) galleryIndex.value = allCarouselImages.value.length - 1
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].textColor
    startInterval()
}

</script>





<style lang="scss" scoped >
.v-index {
    --rb-index__carousel-nav-width: calc(100% / 24 * 3);

    position: relative;
    width: 100%;
    height: 100vh;
}

.v-index__carousel {
    position: relative;
    width: 100%;
    height: 100%;
}

.v-index__carousel__nav-to-left {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--rb-index__carousel-nav-width);
    height: 100%;
    z-index: 1000;
    cursor: pointer;
    user-select: none;
    background-size: cover;
    background-position: left center;
    //mix-blend-mode: multiply;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
}
.v-index__carousel__nav-to-right {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--rb-index__carousel-nav-width);
    height: 100%;
    z-index: 1000;
    cursor: pointer;
    user-select: none;
    //mix-blend-mode: exclusion;
    background-size: cover;
    background-position: right center;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
}

.v-index__carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
}

.v-index__carousel__title {
    position: absolute;
    bottom: var(--rb-gutter);
    left: var(--rb-gutter);
    color: white;
    z-index: 10;
    font-weight: 400;
}

.v-index__carousel__counter {
    position: absolute;
    bottom: var(--rb-gutter);
    right: var(--rb-gutter);
    color: white;
    font-size: 1rem;
    line-height: 1rem;
    z-index: 10;
    font-weight: 400;
}

.v-index__carousel__item__img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}


/* vue transtion */
.gallery-enter-active, .gallery-leave-active {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    position: absolute;
}
.gallery-enter-from {
    opacity: 0;
    //transform: translateX(5%);
}
.gallery-leave-to {
    opacity: 0;
    //transform: translateX(-5%);
}

</style>
