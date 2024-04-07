
const convertTextToURLSlug = (text: string): string => {
  const clearText = text.replace(/[&/\\#,+()$~%.":*?<>{}]/g, '').toLowerCase();
  return clearText.replace(/\s/g, "-")
}


const shuffleItems = (unshuffled: unknown[] | undefined): unknown[] => {
  if (unshuffled === undefined) return []
  const shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled;
}




export {  shuffleItems,convertTextToURLSlug }