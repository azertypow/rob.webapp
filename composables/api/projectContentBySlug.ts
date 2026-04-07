import {
    type IApiBlockImage,
    type IApiBlockVideo,
    type IApiImage,
    type IApiImageOfProject,
    type IApiProjectInfo
} from "~/composables/api/projectsInfo";

export interface IProjectContent extends IApiProjectInfo {
    imageCover:             IApiImageOfProject[]
    galleryProject:   (IApiBlockImage | IApiBlockVideo)[]
    htmlContent: string
    listOfDetails: {name: string, value: string}[]
}

export interface IApiVideo {
    videoID: string,
    credit?: string,
    title: string,
    parentProjectTitle: string,
    isFullWidth: boolean,
}

export interface IApiAbout {
    "error": string | null,
    "data": {
        "textabout": string
        mapImage_about: IApiImage
    } | null
}
export interface IApiContact {
    "error": string | null,
    "data": {
        "textcontact": string,
        "mapImage": IApiImage | null
    } | null

}
