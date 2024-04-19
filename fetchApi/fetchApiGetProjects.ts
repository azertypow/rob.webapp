import type {IApiListOfProjectsInfo} from "~/server/api/projectsInfo";
import {apiBaseUrl} from "~/fetchApi/fetchApiConf";
import {type IProjectContent} from "~/server/api/projectContentBySlug";

export async function fetchApiGetProjects(): Promise<IApiListOfProjectsInfo> {
    return await (await fetch(`${apiBaseUrl}projects`)).json() as IApiListOfProjectsInfo
}

export async function fetchApiGetProjectByUID(uid: string): Promise<IProjectContent> {
    return await (await fetch(`${apiBaseUrl}project-by-uid/${uid}`)).json() as IProjectContent
}
