// importacion librerias
import express from 'express'
export  class ControllerEntidad {
    // atributos de la clase
   public routes(app: any){

    // peticion GET
    app.get('/', (req : express.Request, res: express.Response) => {
        res.send('GET')
    })

    // peticion POST
    app.post('/', (req : express.Request, res: express.Response) => {
        res.send('POST')
    })

    // peticion PUT
    app.put('/', (req : express.Request, res: express.Response) => {
        res.send('PUT')
    })

    // peticion DELETE
    app.delete('/', (req : express.Request, res: express.Response) => {
        res.send('DELETE')
    })

   }
}
