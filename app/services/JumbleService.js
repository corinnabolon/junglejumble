import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { Pop } from "../utils/Pop.js";

class JumbleService{
    setActiveJumble(jumbleId){
        // console.log('aloha i am in the service')
        const activeJumble = AppState.Jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = activeJumble
        AppState.activeJumble.startTime = new Date()
        console.log(AppState.activeJumble.startTime)
        // console.log('active Jumble', activeJumble)
    }
    compareJumble(eventData){
        const activeJumble = AppState.activeJumble
        const inputText = eventData.jumbleBox
        // console.log(eventData, activeJumble.body)
        
        if (inputText == activeJumble.body) {
            // console.log('correct')
            AppState.activeJumble.endTime = new Date()
            console.log(AppState.activeJumble.endTime)
            Pop.success("You're the Smartest Cookie Alive")
        }else
            // console.log('go back to preschool')
            Pop.error("Go Back To Preschool!")
            return
    }
    
}



export const jumbleService = new JumbleService