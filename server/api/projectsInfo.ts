export interface IApiProjectsInfo {
    imageCover:         IApiImageOfProject
    imageCoverForIndex: IApiImageOfProject //todo: imageCoverForIndex is not used in the template
    ArrayOfImagesProject: IApiImageOfProject[]
    ArrayOfImagesCarousel: IApiImageOfProject[]
    title: string
    slug: string
}

export interface IApiImage {
    url: string
    credit?: string
    titre: string
}

export interface IApiImageOfProject extends IApiImage {
    parentProjectTitle: string
    textColor: 'black' | 'white'
    isFullWidth: boolean  //todo: isFullWidth is not used in the template
}

export default defineEventHandler((event): IApiProjectsInfo[] => {
    return [
        {
            slug: 'project-1',
            title: 'titre de projet premier',
            imageCover: {
                url: '/images/compress/01.jpg',
                credit: 'Jacques Martin',
                titre: 'titre image 01',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            imageCoverForIndex: {
                url: '/images/compress/01.jpg',
                credit: 'Jacques Martin',
                titre: 'titre image 01',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            ArrayOfImagesProject: [
                {
                    url: '/images/compress/02.jpg',
                    titre: 'bonjour image 01 sans crédit',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                {
                    url: '/images/compress/03.jpg',
                    credit: 'Paul Hero',
                    titre: '',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'black',
                    isFullWidth: true,
                },
            ],
            ArrayOfImagesCarousel: [
                {
                    url: '/images/compress/04.jpg',
                    credit: 'Jasmine Dugens',
                    titre: 'Encore un titre',
                    parentProjectTitle: 'titre de projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
                {
                    url: '/images/compress/06.jpg',
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
                url: '/images/compress/06.jpg',
                titre: 'Titre',
                parentProjectTitle: 'titre du second projet',
                isFullWidth: true,
                textColor: 'black',
            },
            imageCoverForIndex: {
                url: '/images/compress/06.jpg',
                credit: 'Jacques Martin',
                titre: 'titre image 01',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            ArrayOfImagesProject: [
                {
                    url: '/images/compress/07.jpg',
                    titre: 'bien bien',
                    parentProjectTitle: 'titre du second projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
            ],
            ArrayOfImagesCarousel: [
                {
                    url: '/images/compress/07.jpg',
                    titre: 'hello titre',
                    parentProjectTitle: 'titre du second projet',
                    textColor: 'black',
                    isFullWidth: true,
                },
                {
                    url: '/images/compress/08.jpg',
                    titre: 'hello titre',
                    parentProjectTitle: 'titre du second projet',
                    textColor: 'white',
                    isFullWidth: true,
                },
            ],
        }
    ]
})
