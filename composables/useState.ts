export const useMenuIsOpen = () => {
    return useState('menuIsOpen', () => false)
}

export const useColorForGallery = () => {
    return useState('colorForGallery', () => 'black' as 'black' | 'white')
}

