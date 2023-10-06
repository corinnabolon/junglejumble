import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { Pop } from "../utils/Pop.js";

class JumbleService {
    setActiveJumble(jumbleId) {
        // console.log('aloha i am in the service')
        const activeJumble = AppState.Jumbles.find(jumble => jumble.id == jumbleId)
        AppState.activeJumble = activeJumble
        this.startGame()
        // console.log('active Jumble', activeJumble)
    }
    compareJumble(eventData) {
        const activeJumble = AppState.activeJumble
        const inputText = eventData.jumbleBox
        // console.log(eventData, activeJumble.body)

        if (inputText == activeJumble.body) {
            // console.log('correct')
            this.endGame()
            this.calcResponseTime()
            Pop.success("Great!")
        } else
            // console.log('go back to preschool')
            Pop.error("Nope. Try again!")
        return
    }

    startGame() {
        AppState.activeJumble.startTime = new Date().getTime()
        console.log(AppState.activeJumble.startTime)
    }

    endGame() {
        AppState.activeJumble.endTime = new Date().getTime()
        console.log(AppState.activeJumble.endTime)
    }

    calcResponseTime() {
        AppState.emit("activeJumble")
        let responseTime = 0
        responseTime = AppState.activeJumble.endTime - AppState.activeJumble.startTime
        console.log(responseTime)
        if (AppState.activeJumble.fastestTime == null || responseTime < AppState.activeJumble.fastestTime) {
            AppState.activeJumble.fastestTime = responseTime
            console.log("New response time:", AppState.activeJumble.fastestTime, responseTime)
        } else {
            console.log("No new fastest time set. Fastest time:", AppState.activeJumble.fastestTime, "This time's response time:", responseTime)
        }
    }

}



export const jumbleService = new JumbleService