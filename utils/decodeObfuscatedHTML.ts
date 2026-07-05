export function decodeObfuscatedHTML(
  obfuscatedText: string,
  propsToUpdate: Ref<string>,
) {

  function decodeEncodedBlocks(text: string) {
    return text.replaceAll(/:::decode\s([\s\S]*?):::/g, (fullMatch, encodedText: string) => {
      return `${atob(encodedText)}`
    })
  }

  window.setTimeout(() => {
    propsToUpdate.value = decodeEncodedBlocks(obfuscatedText)
  }, 500)
}

