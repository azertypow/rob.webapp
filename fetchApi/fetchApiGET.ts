import type {IApiListOfProjectsInfo} from "~/server/api/projectsInfo";
import {apiBaseUrl} from "~/fetchApi/fetchApiConf";
import {type IApiAbout, type IApiContact, type IProjectContent} from "~/server/api/projectContentBySlug";

export async function fetchApiGetProjects(): Promise<IApiListOfProjectsInfo> {
    return await (await fetch(`${apiBaseUrl}projects`)).json() as IApiListOfProjectsInfo
}

export async function fetchApiGetProjectByUID(uid: string): Promise<IProjectContent> {
    return await (await fetch(`${apiBaseUrl}project-by-uid/${uid}`)).json() as IProjectContent
}

export async function fetchApiGetAbout(): Promise<IApiAbout> {
    return await (await fetch(`${apiBaseUrl}about`)).json() satisfies IApiAbout
}

export async function fetchApiGetContact(): Promise<IApiContact> {
    return await (await fetch(`${apiBaseUrl}contact`)).json() satisfies IApiContact
}
