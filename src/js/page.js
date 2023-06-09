// deze wordt bij eerste initialisatie en paginawijziging aangemaakt,
// hierin komt alle code dat na content replaced moet komen (dus niet op domcotentrecplaced)

export class Page {
    constructor () {
        this.title = document.title
        this.init
    }

    init = () => {
        this.getPageTitle()
    }

    getPageTitle = () => {
        console.log('page title:', this.title)
    }

    destroyPage = () => {
        console.log('destroy page:', this.title)
    }
}