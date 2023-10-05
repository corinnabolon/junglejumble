import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"
import { Jumble } from "./models/Jumble.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Jumble.js').Jumble[]}*/
  Jumbles = [
    new Jumble({name: '🐫 Jumble', body: "camels love to visit the jungles of camelBodia!"}),
    new Jumble({name: '🦬 Jumble', body: ""}),
    new Jumble({name: '👾 jumble', body: ""}),
    new Jumble({name: '🐔 jumble', body: ""})
  ]

  /** @type {Jumble}*/
  activeJumble = null

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
