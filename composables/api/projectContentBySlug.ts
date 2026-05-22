import {
  type IApiBlockArrayList,
  type IApiBlockText,
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
    page_content: (IApiBlockArrayList | IApiBlockText)[]
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
        listOfDetails_about: {name: string, value: string}[]
        page_content_about: (IApiBlockArrayList | IApiBlockText)[]
    } | null
}
export interface IApiContact {
    "error": string | null,
    "data": {
        "textcontact": string,
        "mapImage": IApiImage | null
        listOfDetails_contact: {name: string, value: string}[]
        page_content_contact: (IApiBlockArrayList | IApiBlockText)[]
    } | null

}
