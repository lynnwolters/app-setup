// in de eerste initialisatie van de app, (bij reloaden van website), wordt er een router aangemaakt,
// als de router is aangemaakt wordt er ook een nieuwe pagina aangemaakt, 
// als er een nieuwe pagina is aangemaakt, wordt de oude verwijderd zodat het geheugen niet te vol raakt
// daarnaast wordt er een nieuwe pagina aangemaakt / oude verwijderd als this.page aanwezig is (ofwel bij paginawijziging)

import { Router } from './router' 
import { Page } from './page' 

export class App { 
    constructor () { 
        this.init() 
    }

    init = () => { 
        this.router = new Router()
    }

    handleContentReplaced = () => { 
        this.createPage()
    }

    createPage = () => { 
        if (this.page) { 
            this.page.destroyPage()
        }
        this.page = new Page() 
    }
}