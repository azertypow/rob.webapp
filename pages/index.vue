<template>
    <section class="v-index"
             :class="{
                    'hide-arrow': arrowDirection === 0,
                    'has-touch-gesture': hasTouchGesture === true,
             }"
    >
        <div
            class="v-index__carousel"
            v-if="projectsInfo"
            @mousemove="cursorPosition = {x: $event.clientX, y: $event.clientY}"
            @touchstart.passive="(e) => {touchGesture.onTouchStart(e); hasTouchGesture = true}"
            @touchend.passive="touchGesture.onTouchEnd"
        >
            <template v-if="useRouter().currentRoute.value.query.cursor === '1'">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none"
                     class="v-index__carousel__cursor"
                     :style="{
                            top: cursorPosition.y + 'px',
                            left: cursorPosition.x + 'px',
                            mixBlendMode: 'normal',
                        }"
                     v-if="arrowDirection !== 0"
                >
                    <circle cx="40" cy="40" r="40" fill="#0000FF"></circle>
                </svg>
            </template>
            <template v-else>
                <svg width="99" height="82" viewBox="0 0 44.9 44.3" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="v-index__carousel__cursor"
                     :style="{
                            top: cursorPosition.y + 'px',
                            left: cursorPosition.x + 'px',
                        }"
                     v-if="arrowDirection === 1"
                >
                    <g id="Layer_1-2">
                        <path d="M35.900390625,24.5458984375H0v-4.828125h35.83203125L16.1142578125,0h6.59521484375l22.16552734375,22.166015625-22.16552734375,22.166015625h-6.59521484375l19.7861328125-19.7861328125Z" style="fill: white"/>
                    </g>
                </svg>
                <svg width="99" height="82" viewBox="0 0 44.9 44.3" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="v-index__carousel__cursor"
                     :style="{
                            top: cursorPosition.y + 'px',
                            left: cursorPosition.x + 'px',
                        }"
                     v-else-if="arrowDirection === -1"
                >
                    <g id="Layer_1-2">
                        <path d="M9,19.8h35.9v4.8H9l19.7,19.7h-6.6L0,22.2,22.2,0h6.6L9,19.8Z" style="fill: white"/>
                    </g>
                </svg>
            </template>

            <div
                class="v-index__carousel__nav-to-left"
                @click="previousGalleryItem"
                @mouseleave="arrowDirection = 0"
                @mouseenter="arrowDirection = -1"
            ></div>
            <video class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--previous"
                   :autoplay="false"
                   muted
                   playsinline
                   v-if="allCarouselImages[previousGalleryIndex]?.image.url.endsWith('.mp4')"
                   :src="allCarouselImages[previousGalleryIndex]?.image.url"
            />
            <img class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--previous"
                 :src="allCarouselImages[previousGalleryIndex]?.image.resize?.xxl"
                 alt="preview of previous gallery image"
                 v-else
            />

            <div class="v-index__carousel__nav-to-right"
                 @click="nextGalleryItem"
                 @mouseleave="arrowDirection = 0"
                 @mouseenter="arrowDirection = 1"
            ></div>
            <video class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--next"
                   :autoplay="false"
                   muted
                   playsinline
                   v-if="allCarouselImages[nextGalleryIndex]?.image.url.endsWith('.mp4')"
                   :src="allCarouselImages[nextGalleryIndex]?.image.url"
            />
            <img class="v-index__carousel__image-preview-box v-index__carousel__image-preview-box--next"
                 :src="allCarouselImages[nextGalleryIndex]?.image.resize?.xxl"
                 alt="preview of next gallery image"
                 v-else
            />

            <div
                class="v-index__carousel__title"
                :style="{
                    color: colorForGallery,
                }"
                :key="galleryIndex"
            >
                {{ allCarouselImages[galleryIndex]?.parentProjectTitle }}
            </div>

            <div
                :key="galleryIndex"
                class="v-index__carousel__counter"
                :style="{
                    color: colorForGallery,
                }"
            >{{ galleryIndex + 1 }} / {{ allCarouselImages.length }}
            </div>


            <template
                v-for="(carouselImage, index) of allCarouselImages"
            >
                <div
                    class="v-index__carousel__item"
                    v-if="index === galleryIndex"
                >
                    <nuxt-link
                        :href="`/project/${carouselImage.projectSlug}`"
                    >
                        <template v-if="carouselImage.image.url.endsWith('.mp4')">
                            <video class="v-index__carousel__item__img"
                                   autoplay
                                   loop
                                   muted
                                   playsinline
                                   :src="carouselImage.image.url"
                            />
                        </template>
                        <template v-else>
                            <img
                                class="v-index__carousel__item__img"
                                alt=""
                                :src="carouselImage.image.resize?.xxl"
                                :style="{
                                  objectPosition: carouselImage.image.focus
                                }"
                            />
                        </template>
                    </nuxt-link>
                </div>
            </template>
        </div>
    </section>
</template>





<script lang="ts" setup>

import type {ComputedRef} from "vue";
import type {IApiImageOfProject, IApiListOfProjectsInfo} from "~/composables/api/projectsInfo";

const touchGesture = new TouchGesture(
  () => {
    previousGalleryItem()
    console.log('previous!')
  },
  () => {
    nextGalleryItem()
    console.log('next!')
  },
  () => {
    console.log('clicked!')
  },
)

const hasTouchGesture = ref(false)

const cursorPosition = ref({
    x: 0,
    y: 0,
})

const arrowDirection = ref<-1 | 1 | 0>(0)

const colorForGallery = useColorForGallery()

const projectsInfo = useState<IApiListOfProjectsInfo | null>('projectsInfo')

const allCarouselImages: ComputedRef<{image: IApiImageOfProject, parentProjectTitle: string, projectSlug: string}[]> = computed(() => {

    const toReturn: {image: IApiImageOfProject, parentProjectTitle: string, projectSlug: string}[] = []

    if( projectsInfo.value === null ) return []

    projectsInfo.value.projects.map((value) => {

        value.arrayOfImagesCarousel?.map(value1 => {
            toReturn.push({
                image: value1,
                parentProjectTitle: value.title,
                projectSlug: value.slug
            })
        })
    })

    return toReturn.reverse()
})

const galleryIndex = ref(0)

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
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].image.textColor
}

// todo: code optimisation (click function for clearInterfvale and ducplication code)
function previousGalleryItem() {
    galleryIndex.value--
    if(galleryIndex.value < 0) galleryIndex.value = allCarouselImages.value.length - 1
    colorForGallery.value = allCarouselImages.value[galleryIndex.value].image.textColor
}

// todo: clean 2

// let interval = 5_000
// let intervalCounter = 0
//
// const autoNext = () => window.setTimeout(() => {
//     nextGalleryItem()
//     intervalCounter++
//     if (intervalCounter === 2) interval = 5_000
//     autoNext()
// }, interval)
// autoNext()

</script>





<style lang="scss" scoped >
.v-index {
    --rb-index__carousel-nav-width: calc(100% / 24 * 4);

    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
}

.v-index__carousel {
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    touch-action: none;
}

.v-index__carousel__nav-to-left {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--rb-index__carousel-nav-width);
    height: 100%;
    z-index: 1000;
    cursor: url("data:image/svg+xml,%3Csvg width='50' height='60' viewBox='0 0 99 82' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40.5072L40.5072 0H59.4384L18.9312 40.5072L59.4384 81.0144H40.5072L0 40.5072ZM11.5536 33.5472H98.832V47.4672H11.5536V33.5472Z' fill='black'/%3E%3C/svg%3E") 0 60, pointer;
    cursor: none;
    user-select: none;
    mix-blend-mode: difference;

    &:hover+.v-index__carousel__image-preview-box--previous {
        opacity: 1;
    }

    .has-touch-gesture & {
      display: none;
    }
}
.v-index__carousel__nav-to-right {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--rb-index__carousel-nav-width);
    height: 100%;
    z-index: 1000;
    cursor: none;
    user-select: none;

    &:hover+.v-index__carousel__image-preview-box--next {
        opacity: 1;
    }

    .has-touch-gesture & {
      display: none;
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
    opacity: 0;
}
.v-index__carousel__image-preview-box--previous {
    mask-image: linear-gradient(90deg,#000 0,#000 var(--rb-index__carousel-nav-width),transparent var(--rb-index__carousel-nav-width),transparent);
}
.v-index__carousel__image-preview-box--next {
    mask-image: linear-gradient(-90deg,#000 0,#000 var(--rb-index__carousel-nav-width),transparent var(--rb-index__carousel-nav-width),transparent);
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
    z-index: 1000;
    pointer-events: none;
    font-weight: 400;
    width: calc(100% - var(--rb-gutter) * 2 - 4rem);

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
    z-index: 1000;
    pointer-events: none;
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


.v-index__carousel__cursor {
    transform-origin: left center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    mix-blend-mode: difference;
    width: 25px;
    height: auto;
    pointer-events: none;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: transform .25s ease-in-out, opacity .25s ease-in-out;

    .has-touch-gesture & {
      display: none;
    }
}
</style>
