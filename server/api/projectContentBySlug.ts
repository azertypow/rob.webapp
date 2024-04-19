import {type IApiImageOfProject, type IApiProjectInfo} from "~/server/api/projectsInfo";

export interface IProjectContent extends IApiProjectInfo {
    imageCover:             IApiImageOfProject  // image
    galleryProject:   (IApiImageOfProject | IApiVideo)[]
    htmlContent: string
    listOfDetails: {title: string, content: string}[]
}

export interface IApiVideo {
    videoID: string,
    credit?: string,
    title: string,
    parentProjectTitle: string,
    isFullWidth: boolean,
}

export default defineEventHandler((event): IProjectContent => {
    return {
        slug: 'project-1',
        title: 'Unfrozen – a Design Research Reader by the Swiss Design Network',
        date: '2019',
        selfInitiated: true,
        tags: ['Monograph'],
        htmlContent: `
        <p>
          Artists’ books, which once allowed artists to avoid meddlesome institutions and galleries in producing and distributing artistic work, today have a paradoxical existence. On the one hand, there are the extremely rare founding books, termed “first edition” or “original”, and, on the other hand, there are “facsimile” editions, which entered the artist’s book realm to counteract the scarcity of the originals by offering re-enactments and reinterpretations of famous titles.
        </p>
        <p>
          This essay underlines a curiosity for practices of appropriation by artists and publishers, and aims to expose methods and discourses in the production of facsimile artists’ books.
        </p>
        `,
        listOfDetails: [
            {title: 'Written and designed by:', content: 'Rob van Leijsen'},
            {title: 'French translation:',      content: 'Lucile Dupraz'},
            {title: 'Publisher:',               content: 'Clinamen, Geneva'},
            {title: 'Coucou titre:',               content: 'Clinamen, Geneva hello'},
        ],
        imageCover: {
            url: '/images/compress/01.jpg',
            credit: 'Jacques Martin',
            title: 'titre image 01',
            parentProjectTitle: 'titre de projet',
            textColor: 'white',
            isFullWidth: true,
        },
        imageCoverForIndex: {
            url: '/images/compress/01.jpg',
            credit: 'Jacques Martin',
            title: 'titre image 01',
            parentProjectTitle: 'titre de projet',
            textColor: 'white',
            isFullWidth: true,
        },
        galleryProject: [
            {
                url: '/images/compress/02.jpg',
                title: 'bonjour image 01 sans crédit',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
            {
                url: '/images/compress/03.jpg',
                credit: 'Paul Hero',
                title: 'autre titre de l\'image',
                parentProjectTitle: 'titre de projet',
                textColor: 'black',
                isFullWidth: false,
            },
            {
                videoID: '268407434',
                credit: 'Nathalie Marko',
                title: 'Hello Hello titre',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: false,
            },
            {
                videoID: '259824601',
                title: 'Hello Hello',
                parentProjectTitle: 'titre de projet',
                textColor: 'white',
                isFullWidth: true,
            },
        ],
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
    }
})
