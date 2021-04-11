// importacion librerias
import express from 'express'
import { schemaUserDelete, schemaUserPost, schemaUserPut, schemaUserGet } from "./user.validate";
import { UserService } from '../services/user.service';

export  class ControllerUser {
    private userService = new UserService()
    // atributos de la clase
   public routes(app: any){

    // peticion GET
    app.get('/user', async (req : express.Request, res: express.Response) => {
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


        try {
            const user = await this.userService.getUser(Number(req.query.id))
            console.log("CLL", user);

            // retornamos la informacion del usuario
            res.status(200).json({
                data: user,
                status: null
            })
            // finalizamos el proceso
            res.end()

        } catch (error) {
            res.status(500).json({
                data: null,
                status: error
            }).end()
        }

    })

    // Peticion GET obtener todo
    app.get('/user/list', async (req : express.Request, res: express.Response) => {

        try {
            const listUser = await this.userService.getUsers()
            // retornamos listado usuario
            res.status(200).json({
                data: listUser,
                status: null
            })
            // finalizamos el proceso
            res.end()

        } catch (error) {
            res.status(500).json({
                data: null,
                status: error
            }).end()
        }
    })

        // peticion POST
        app.post('/user', async (req : express.Request, res: express.Response) => {

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

            try {
                // retornamos la informacion del usuario
                const user = await this.userService.postUser(req.body.name)
                res.status(201).json({
                    data: user,
                    status: null
                })
                // finalizamos el proceso
                res.end()

            } catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end()
            }


        })

        // peticion PUT
    app.put('/user', async (req : express.Request, res: express.Response) => {
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

        try {
            const userEdit = await this.userService.putUser(req.body.id, req.body.name)

            // si no se encuentra el usuario
            res.status(200).json({
                data: userEdit,
                status: null
            }).end()

        } catch (error) {
            res.status(500).json({
                data: null,
                status: error
            }).end()
        }
        // usuario ya editado

    })

    // peticion DELETE
    app.delete('/user', async (req : express.Request, res: express.Response) => {
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

        try {

            const user = await this.userService.deleteUser(Number(req.body.id))
            // reponde exitoso
            res.status(200).json({
                data: user,
                status: null
            }).end()

        } catch (error) {
            res.status(500).json({
                data: null,
                status: error
            }).end()
        }

    })

   }
}
