import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { jumbleService } from "../services/JumbleService.js"
import { getFormData } from "../utils/FormHandler.js"





function _drawJumbles(){
    const jumbles = AppState.Jumbles
    let content = ''
    jumbles.forEach(jumble => content += jumble.jumbleCard)
    setHTML('jumbles', content)
    // console.log('I hath been invokedth')
}


function _drawActiveJumble(){
    const jumble = AppState.activeJumble
    setHTML('activeJumble', jumble.activeJumbleCard)
    // console.log('drawing active Jumble', activeJumble)
}


export class JumbleController{
    constructor(){
        // console.log('hi i exist now')
        AppState.on('activeJumble', _drawActiveJumble)
        _drawJumbles()
        
    }
    setActiveJumble(jumbleId){
        jumbleService.setActiveJumble(jumbleId)
        _drawActiveJumble()
    }
    compareJumble(event){
        event.preventDefault()
        const form = event.target
        const eventData = getFormData(form)
        // console.log(eventData)
        jumbleService.compareJumble(eventData)
        form.reset()
    }
}