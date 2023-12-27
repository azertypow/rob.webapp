import type {IApiProjectsInfo} from "~/server/api/projectsInfo";

export const useMenuIsOpen = () => {
    return useState('menuIsOpen', () => false)
}

export const useColorForGallery = () => {
    return useState('colorForGallery', () => 'black' as 'black' | 'white')
}

export const useCurrentProjectsInfo = () => {
    return useState('currentProjectsInfo', () => null as IApiProjectsInfo | null)
}
