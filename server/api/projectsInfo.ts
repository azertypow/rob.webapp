
export interface IApiListOfProjectsInfo {
    projects: IApiProjectInfo[]
}

export interface IApiProjectInfo {
    imageCoverForIndex:     IApiImageOfProject  // image for index on mouse over
    ArrayOfImagesCarousel:  IApiImageOfProject[] // image for home
    title: string
    slug: string
    tags: string[]
    selfInitiated: boolean
    date: string
}

export interface IApiImage {
    url: string
    credit?: string
    title: string
}

export interface IApiImageOfProject extends IApiImage {
    parentProjectTitle: string
    textColor: 'black' | 'white'
    isFullWidth: boolean  //todo: isFullWidth is not used in the template
}

export default defineEventHandler((event): IApiListOfProjectsInfo => {
    return {
        projects: [
            {
                slug: 'project-1',
                title: 'Unfrozen – a Design Research Reader by the Swiss Design Network',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph'],
                imageCoverForIndex: {
                    url: '/images/compress/01.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/04.jpg',
                        credit: 'Jasmine Dugens',
                        title: 'Encore un titre',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/06.jpg',
                        credit: 'Nathalie Marko',
                        title: 'Hello Hello',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
            {
                slug: 'project-2',
                title: 'Le Plaza – Passé Présent Futur – Episode 2',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph', 'Manifest', 'Brochure'],
                imageCoverForIndex: {
                    url: '/images/compress/06.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/07.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'black',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/08.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
            {
                slug: 'project-3',
                title: 'Designerly ways of knowing: a working inventory',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph'],
                imageCoverForIndex: {
                    url: '/images/compress/01.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/04.jpg',
                        credit: 'Jasmine Dugens',
                        title: 'Encore un titre',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/06.jpg',
                        credit: 'Nathalie Marko',
                        title: 'Hello Hello',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
            {
                slug: 'project-4',
                title: 'Graphic Design in the Post-Digital Age',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph', 'Visual identity'],
                imageCoverForIndex: {
                    url: '/images/compress/06.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/07.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'black',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/08.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
            {
                slug: 'project-5',
                title: 'HES-SO Genève',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph'],
                imageCoverForIndex: {
                    url: '/images/compress/01.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/04.jpg',
                        credit: 'Jasmine Dugens',
                        title: 'Encore un titre',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/06.jpg',
                        credit: 'Nathalie Marko',
                        title: 'Hello Hello',
                        parentProjectTitle: 'titre de projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
            {
                slug: 'project-6',
                title: 'Le Plaza – Passé Présent Futur – Episode 1',
                date: '2019',
                selfInitiated: true,
                tags: ['Monograph', 'Manifest', 'Brochure'],
                imageCoverForIndex: {
                    url: '/images/compress/06.jpg',
                    credit: 'Jacques Martin',
                    title: 'titre image 01',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                ArrayOfImagesCarousel: [
                    {
                        url: '/images/compress/07.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'black',
                        isFullWidth: true,
                    },
                    {
                        url: '/images/compress/08.jpg',
                        title: 'hello titre',
                        parentProjectTitle: 'titre du second projet',
                        textColor: 'white',
                        isFullWidth: true,
                    },
                ],
            },
        ]
    }
})








