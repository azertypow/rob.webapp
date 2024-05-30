
export interface IApiListOfProjectsInfo {
    projects: IApiProjectInfo[]
}

export interface IApiProjectInfo {
    imageCoverForIndex:     IApiImageOfProject  // image for index on mouse over
    arrayOfImagesCarousel:  IApiImageOfProject[] // image for home
    title: string
    slug: string
    tags: IApiTag[]
    selfInitiated: boolean
    date: string
}

export interface IApiTag {
    "title": string,
    "uid": string,
    "uuid": string,
    "uri": string,
}

export interface IApiImage {
    url: string
    credit?: string
    title: string

    caption?: null,
    alt?: string,
    link?: string,
    photoCredit?: string,
    "mediaUrl"?: string,
    "width"?: number,
    "height"?: number,
    "resize"?: {
        "tiny": string,
        "small": string,
        "reg": string,
        "large": string,
        "xxl": string
    }
}

export interface IApiImageOfProject extends IApiImage {
    textColor: 'black' | 'white'
    isFullWidth: boolean  //todo: isFullWidth is not used in the template
}

export interface IApiBlockImage {
    "content": {
        "isfullwidth": "true" | "false"
    },
    "id": string,
    "isHidden": boolean,
    "type": "image",
    "images": IApiImage[]
}

export interface IApiBlockVideo {
    "content": {
        "url": "https://vimeo.com/787533687",
        "credit": "",
        "title": "",
        "isfullwidth": "true" | "false"
    },
    "id": "03274bd7-15c1-46ce-bf21-2b0f6645cd33",
    "isHidden": false,
    "type": "video"
}








