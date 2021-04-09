// importacion librerias
import express from 'express'
export  class ControllerEntidad {
    // atributos de la clase
   public routes(app: any){

    // peticion GET
    app.get('/', (req : express.Request, res: express.Response) => {
        res.send('Hello Word')
    })

   }
}
