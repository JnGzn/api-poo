// importacion librerias
import express from 'express'
import joi, { valid } from "joi";

// definicion listado usuario
const listUser = [
    {
        id: 1,
        name: 'Juan'
    },
    {
        id: 2,
        name: 'Gabriel'
    },
    {
        id: 3,
        name: 'Garzon'
    }
]

// define esquema usuario
const schemaUser = joi.object({
    id: joi.number().required(),
    name: joi.string()
})

export  class ControllerUser {
    // atributos de la clase
   public routes(app: any){

    // peticion GET
    app.get('/user', (req : express.Request, res: express.Response) => {
        const validation = schemaUser.validate(req.query)

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

        // recorremos el listado de usuarios
        listUser.forEach(user => {

            // si ID enviado coincide con el listado
            if(user.id === Number(req.query.id)) {

                // retornamos la informacion del usuario
                res.status(200).json({
                    data: user,
                    status: null
                })
                // finalizamos el proceso
                res.end()
            }
        })

        // si no se encuentra el usuario
        res.status(200).json({
            data: {},
            status: null
        })
        // finalizamos el proceso
        res.end()

    })

    // Peticion GET obtener todo
    app.get('/user/list', (req : express.Request, res: express.Response) => {
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
        console.log(req.body)
        const validation = schemaUser.validate(req.body)

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

        // usuario a guardar
        const user = {
            id: Number(req.body.id),
            name: req.body.name
        }


        listUser.forEach((elemnt, idx)=> {
            // validamos si ya existe el Id
            if(elemnt.id === user.id){
                // notifica existencia
                res.status(202).json({
                    data: {},
                    status: "id ya existe"
                })
                // finalzamos el proceso
                res.end()
            }
        })




        // guarda usuario
        listUser.push(user)

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
        const validation = schemaUser.validate(req.body)

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
        const userEdit = {
            id: req.body.id,
            name: req.body.name
        }

        // recorremos el listado de usuarios
        listUser.forEach((user, idx) => {

            // si ID enviado coincide con el listado
            if(user.id === Number(req.body.id)) {
                // guardamos en el cambio
                listUser[idx] = userEdit
                // retornamos la informacion del usuario
                res.status(200).json({
                    data: userEdit,
                    status: null
                })
                // finalizamos el proceso
                res.end()
            }
        })

         // si no se encuentra el usuario
         res.status(200).json({
            data: {},
            status: null
        })
        // finalizamos el proceso
        res.end()

    })

    // peticion DELETE
    app.delete('/user', (req : express.Request, res: express.Response) => {
        const validation = schemaUser.validate(req.body)

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

        let idxUser = -1
        // Recorre listado
        listUser.forEach((elemnt, idx)=> {
            // busca ID
            if(elemnt.id === req.body.id){
                idxUser = idx
            }
        })

        // valida si encontro ID
        if(idxUser === -1) {

            // no se encontró la identifcacion
            res.status(202).json({
                data: null,
                status: "No se encontró el ID"
            })
            res.end()

        }

        // borra el elemento
        listUser.splice(idxUser, 1)

        // reponde exitoso
        res.status(200).json({
            data: listUser,
            status: null
        })
        // finaliza
        res.end()
    })

   }
}
