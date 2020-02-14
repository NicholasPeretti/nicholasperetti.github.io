/**
 * Remove generated hash from a filename
 * 'android-134x345-87348r893.png.gz' -> 'android-134x345.png.gz'
 */

export function removeHash(filename) {
  const parts = filename.split('-')
  const extention = parts[parts.length - 1]
    .split('.')
    .splice(1)
    .join('.')
  return parts.slice(0, parts.length - 1).join('-') + `.${extention}`
}
