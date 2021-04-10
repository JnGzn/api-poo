

// importacion de librerias
import { ControllerUser } from "./routes/user.controller";
import express from 'express'
import logger from "morgan";


export default class App {
  // atributos de la clase App
  public app: express.Application
  public rutasUser: ControllerUser = new ControllerUser()

  // constructor de la clase App
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(logger('dev'))
    // inicio routes
    this.rutasUser.routes(this.app)
  }
}
