import {
    IApiBlockImage,
    IApiBlockVideo,
    IApiImage,
    type IApiImageOfProject,
    type IApiProjectInfo
} from "~/server/api/projectsInfo";

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
    } | null
}
export interface IApiContact {
    "error": string | null,
    "data": {
        "textcontact": string,
        "mapImage": IApiImage | null
    } | null

}
