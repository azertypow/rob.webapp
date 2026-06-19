import {useShowProjectContent, useNavigationIsShowingOnBottomOfProjectPage} from "~/composables/useState";

export function setMenuStatusInteraction(menuIsActiveFor: 'bottomProject' | 'navigation') {

  if(menuIsActiveFor === 'bottomProject') {
    useShowProjectContent().value = false
    useNavigationIsShowingOnBottomOfProjectPage().value = true
    document.body.style.overflow = 'hidden'
  } else {
    useShowProjectContent().value = true
    useNavigationIsShowingOnBottomOfProjectPage().value = false
    document.body.style.overflow = 'auto'
  }

}

export function scrollOnTopOfMenu() {
  const scrollPosition = document.body.scrollHeight - window.innerHeight / 2
  document.documentElement.scroll({
    top: scrollPosition,
    behavior: 'smooth'
  })
}


export function backToCurrentProject() {
  setMenuStatusInteraction('navigation')
  scrollOnTopOfMenu()
}
