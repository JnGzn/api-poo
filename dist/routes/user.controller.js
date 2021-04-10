"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerUser = void 0;
const user_validate_1 = require("./user.validate");
const user_service_1 = require("../services/user.service");
class ControllerUser {
    constructor() {
        this.userService = new user_service_1.UserService();
    }
    // atributos de la clase
    routes(app) {
        // peticion GET
        app.get('/user', (req, res) => {
            const validation = user_validate_1.schemaUserGet.validate(req.query);
            // si existe el error
            if (validation.error) {
                // retornamos el error
                res.status(422).json({
                    data: null,
                    status: validation.error.message
                });
                // finalzamos el proceso
                res.end();
            }
            const user = this.userService.getUser(Number(req.query.id));
            // retornamos la informacion del usuario
            res.status(200).json({
                data: user,
                status: null
            });
            // finalizamos el proceso
            res.end();
        });
        // Peticion GET obtener todo
        app.get('/user/list', (req, res) => {
            const listUser = this.userService.getUsers();
            // retornamos listado usuario
            res.status(200).json({
                data: listUser,
                status: null
            });
            // finalizamos el proceso
            res.end();
        });
        // peticion POST
        app.post('/user', (req, res) => {
            const validation = user_validate_1.schemaUserPost.validate(req.body);
            // si existe el error
            if (validation.error) {
                // retornamos el error
                res.status(422).json({
                    data: null,
                    status: validation.error.message
                });
                // finalzamos el proceso
                res.end();
            }
            const user = this.userService.postUser(req.body.name);
            // retornamos la informacion del usuario
            res.status(201).json({
                data: user,
                status: null
            });
            // finalizamos el proceso
            res.end();
        });
        // peticion PUT
        app.put('/user', (req, res) => {
            const validation = user_validate_1.schemaUserPut.validate(req.body);
            // si existe el error
            if (validation.error) {
                // retornamos el error
                res.status(422).json({
                    data: null,
                    status: validation.error.message
                });
                // finalzamos el proceso
                res.end();
            }
            // usuario ya editado
            const userEdit = this.userService.putUser(req.body.id, req.body.name);
            // si no se encuentra el usuario
            res.status(200).json({
                data: userEdit,
                status: null
            }).end();
        });
        // peticion DELETE
        app.delete('/user', (req, res) => {
            const validation = user_validate_1.schemaUserDelete.validate(req.body);
            // si existe el error
            if (validation.error) {
                // retornamos el error
                res.status(422).json({
                    data: null,
                    status: validation.error.message
                });
                // finalzamos el proceso
                res.end();
            }
            const user = this.userService.deleteUser(Number(req.body.id));
            // reponde exitoso
            res.status(200).json({
                data: {},
                status: null
            }).end();
        });
    }
}
exports.ControllerUser = ControllerUser;
//# sourceMappingURL=user.controller.js.map