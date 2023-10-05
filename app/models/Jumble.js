import { generateId } from "../utils/GenerateId.js"

// data.startTime ? new Date(data.startTime) : new Date()
export class Jumble{
    constructor(data){
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        this.fastestTime = null
        this.startTime = null
        this.endTime = null
    }
    get jumbleCard(){
        return `
        <div class="col-4">
            <h3>Jumbles!</h3>
                <div class="d-flex">
                    <button type="button" class="btn" onclick="app.JumbleController.setActiveJumble('${this.id}')">Start</button><p class="mb-0 pt-2">${this.name}</p>
                </div>
        </div>`
    }
    get activeJumbleCard(){
        return `
        <div class="col-6">
            <div class="d-flex justify-content-between align-items-center mt-5">
                <h3>${this.name}</h3><p class="fs-4 pb-0 pt-2">${this.fastestTime}</p>
            </div>
            <div>
                <p>${this.body}</p>
            </div>
        </div>
        <div class="col-6">
            <div>
                <form onsubmit="app.JumbleController.compareJumble(event)">
                    <textarea type="text" name="jumbleBox" id="jumbleBox" rows="5" placeholder="type the sentence"></textarea>
                    <button class="btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        `
    }
}



// <div class="container-fluid">
        //     <div class="row">
        //         <div class="col-12">
        //             <div><h-3>${this.name}</h-3><p>${this.fastestTime}</p></div>
        //             <div><p>${this.body}</p></div>
        //         </div>
        //     </div>