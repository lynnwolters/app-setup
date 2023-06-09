// hierin wordt de app aangemaakt / geinitalisseerd,
// dit gebeurt een keer, vandaar dat die in de domcontentloaded wordt gecalled

import './style.scss'
import './css/swup.scss'

import { App } from './js/app'

export let app = null

function initApp() {
    app = new App()
}

document.addEventListener('DOMContentLoaded', () => {
    initApp()
})