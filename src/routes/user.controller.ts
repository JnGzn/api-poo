// importacion librerias
import express from 'express'
import { schemaUserDelete, schemaUserPost, schemaUserPut, schemaUserGet } from "./user.validate";
import { UserService } from '../services/user.service';




export  class ControllerUser {
    private userService = new UserService()
    // atributos de la clase
   public routes(app: any){

    // peticion GET
    app.get('/user', (req : express.Request, res: express.Response) => {
        const validation = schemaUserGet.validate(req.query)

        // si existe el error
        if(validation.error){
            // retornamos el error
            res.status(422).json({
                data: null,
                status: validation.error.message
            })
            // finalzamos el proceso
            res.end()
        }

        const user = this.userService.getUser(Number(req.query.id))

        // retornamos la informacion del usuario
        res.status(200).json({
            data: user,
            status: null
        })
        // finalizamos el proceso
        res.end()

    })

    // Peticion GET obtener todo
    app.get('/user/list', (req : express.Request, res: express.Response) => {

        const listUser = this.userService.getUsers()
        // retornamos listado usuario
        res.status(200).json({
            data: listUser,
            status: null
        })
        // finalizamos el proceso
        res.end()
    })

        // peticion POST
        app.post('/user', (req : express.Request, res: express.Response) => {

            const validation = schemaUserPost.validate(req.body)

            // si existe el error
            if(validation.error){
                // retornamos el error
                res.status(422).json({
                    data: null,
                    status: validation.error.message
                })
                // finalzamos el proceso
                res.end()
            }

            const user = this.userService.postUser(req.body.name)

            // retornamos la informacion del usuario
            res.status(201).json({
                data: user,
                status: null
            })
            // finalizamos el proceso
            res.end()

        })

        // peticion PUT
    app.put('/user', (req : express.Request, res: express.Response) => {
        const validation = schemaUserPut.validate(req.body)

        // si existe el error
        if(validation.error){
            // retornamos el error
            res.status(422).json({
                data: null,
                status: validation.error.message
            })
            // finalzamos el proceso
            res.end()
        }
        // usuario ya editado
        const userEdit = this.userService.putUser(req.body.id, req.body.name)

         // si no se encuentra el usuario
         res.status(200).json({
            data: userEdit,
            status: null
        }).end()

    })

    // peticion DELETE
    app.delete('/user', (req : express.Request, res: express.Response) => {
        const validation = schemaUserDelete.validate(req.body)

        // si existe el error
        if(validation.error){
            // retornamos el error
            res.status(422).json({
                data: null,
                status: validation.error.message
            })
            // finalzamos el proceso
            res.end()
        }

        const user = this.userService.deleteUser(Number(req.body.id))
        // reponde exitoso
        res.status(200).json({
            data: {},
            status: null
        }).end()

    })

   }
}
