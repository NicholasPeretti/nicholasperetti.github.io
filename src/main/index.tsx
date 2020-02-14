import { render, h } from 'preact'
import App from './App'

const appContainer = document.createElement('div')
document.body.appendChild(appContainer)
render(<App />, appContainer)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
  })
}
