<template>
    <section class="v-index" >
        <div
            class="v-index__carousel"
            v-if="projectsInfo"
        >
            <div
                class="v-index__carousel__nav-to-left"
                @click="previousGalleryItem"
            ></div>
            <img class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--previous"
                 :src="allCarouselImages[previousGalleryIndex].url"
                 alt="preview of previous gallery image"
            />

            <div class="v-index__carousel__nav-to-right"
                 @click="nextGalleryItem"

            ></div>
            <img class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--next"
                 :src="allCarouselImages[nextGalleryIndex].url"
                 alt="preview of next gallery image"
            />

            <transition name="v-transition-mask-slide"
                        class="v-transition-mask-slide"
                        mode="out-in"
                        duration="1000"
            >
                <div
                    class="v-index__carousel__title"
                    :style="{
                        color: colorForGallery,
                    }"
                    :key="galleryIndex"
                >
                    {{ allCarouselImages[galleryIndex].parentProjectTitle }}
                </div>
            </transition>

            <transition name="v-transition-mask-slide"
                        class="v-transition-mask-slide"
                        mode="out-in"
                        duration="1000"
            >
                <div
                    :key="galleryIndex"
                    class="v-index__carousel__counter"
                    :style="{
                        color: colorForGallery,
                    }"
                >{{ galleryIndex + 1 }} / {{ allCarouselImages.length + 1 }}
                </div>
            </transition>


            <template
                v-for="(carouselImage, index) of allCarouselImages"
            >
                <transition name="gallery"
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

const projectsInfo = useState<IApiProjectsInfo[]>('projectsInfo')

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

onMounted(() => {
})


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
    galleryIndex.value++
    if(galleryIndex.value >= allCarouselImages.value.length) galleryIndex.value = 0
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].textColor
}

// todo: code optimisation (click function for clearInterfvale and ducplication code)
function previousGalleryItem() {
    galleryIndex.value--
    if(galleryIndex.value < 0) galleryIndex.value = allCarouselImages.value.length - 1
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].textColor
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

    &:hover+.v-index__carousel__image-preview-box--previous {
        opacity: .75;
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

    &:hover+.v-index__carousel__image-preview-box--next {
        opacity: .75;
    }
}

.v-index__carousel__image-preview-box {
    z-index: 500;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
    transition: opacity .5s ease-in-out;
    opacity: 0;
}
.v-index__carousel__image-preview-box--previous {
    mask-image: linear-gradient(90deg,#000 0,#000 0%,transparent calc(100% / 24 * 4),transparent);
}
.v-index__carousel__image-preview-box--next {
    mask-image: linear-gradient(-90deg,#000 0,#000 0%,transparent calc(100% / 24 * 4),transparent);
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

    .v-index__carousel__title__value {
        position: absolute;
        top: 0;
        left: 0;
        white-space: nowrap;
    }
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
