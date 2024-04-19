import type {IApiProjectInfo} from "~/server/api/projectsInfo";

export default function(projectsInfo: IApiProjectInfo[], projectSlug: string): IApiProjectInfo | undefined {
    return projectsInfo.find(project => project.slug === projectSlug) as IApiProjectInfo | undefined
}
