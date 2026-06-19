import type {IApiListOfProjectsInfo, IApiProjectInfo} from "~/composables/api/projectsInfo";

export const useMenuIsOpen = () => {
    return useState('menuIsOpen', () => false)
}

export const useColorForGallery = () => {
    return useState('colorForGallery', () => 'black' as 'black' | 'white')
}

export const useCurrentProjectsInfo = () => {
    return useState('currentProjectsInfo', () => null as IApiProjectInfo | null)
}

export const useNavigationIsShowingOnBottomOfProjectPage = () => {
  return useState('navigationIsShowingOnBottomOfProjectPage', () => false)
}

export const useProjectsInfo = () => {
  return useState<IApiListOfProjectsInfo>('projectsInfo', () => {
    return {projects: []}
  })
}

export const useShowProjectContent = () => {
  return useState<boolean>('showProjectContent', () => {
    return true
  })
}
