import type {IApiProjectsInfo} from "~/server/api/projectsInfo";

export default function(projectsInfo: IApiProjectsInfo[], projectSlug: string): IApiProjectsInfo | undefined {
    return projectsInfo.find(project => project.slug === projectSlug) as IApiProjectsInfo | undefined
}
