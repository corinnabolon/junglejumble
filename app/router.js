import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { JumbleController } from "./controllers/JumbleController.js";
import { JumbleView } from "./views/JumbleView.js";


export const router = [
  {
    path: '',
    controller: JumbleController,
    view: JumbleView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]