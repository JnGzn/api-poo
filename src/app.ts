

// importacion de librerias
import { ControllerEntidad } from "./routes/entidad.controller";
import express from 'express'
import logger from "morgan";


export default class App {
  // atributos de la clase App
  public app: express.Application
  public rutas: ControllerEntidad = new ControllerEntidad()

  // constructor de la clase App
  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(logger('dev'))
    // inicio routes
    this.rutas.routes(this.app)
  }
}
