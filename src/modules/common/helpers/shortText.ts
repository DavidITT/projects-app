export const shortText = (text:string) => {
  return (text.length <= 12) ? text : text.substring(0, 12 - 3) + '...'
}
