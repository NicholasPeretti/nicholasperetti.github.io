import { readFileSync } from 'fs'
import { render } from 'ejs'

export default function renderHtmlTemplate(templatePath, variables) {
  const icons = Object.keys(variables.bundle).reduce((acc, item) => {
    if (
      item.includes('android-chrome') ||
      item.includes('favicon') ||
      item.includes('apple-touch-icon')
    ) {
      return [...acc, item]
    }

    return acc
  }, [])
  const template = readFileSync(templatePath).toString()
  return render(template, { ...variables, icons })
}
