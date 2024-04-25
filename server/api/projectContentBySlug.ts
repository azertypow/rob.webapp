import {IApiBlockImage, IApiBlockVideo, type IApiImageOfProject, type IApiProjectInfo} from "~/server/api/projectsInfo";

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
