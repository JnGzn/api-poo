"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        app.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
            try {
                const user = yield this.userService.getUser(Number(req.query.id));
                console.log("CLL", user);
                // retornamos la informacion del usuario
                res.status(200).json({
                    data: user,
                    status: null
                });
                // finalizamos el proceso
                res.end();
            }
            catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end();
            }
        }));
        // Peticion GET obtener todo
        app.get('/user/list', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const listUser = yield this.userService.getUsers();
                // retornamos listado usuario
                res.status(200).json({
                    data: listUser,
                    status: null
                });
                // finalizamos el proceso
                res.end();
            }
            catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end();
            }
        }));
        // peticion POST
        app.post('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
            try {
                // retornamos la informacion del usuario
                const user = yield this.userService.postUser(req.body.name);
                res.status(201).json({
                    data: user,
                    status: null
                });
                // finalizamos el proceso
                res.end();
            }
            catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end();
            }
        }));
        // peticion PUT
        app.put('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
            try {
                const userEdit = yield this.userService.putUser(req.body.id, req.body.name);
                // si no se encuentra el usuario
                res.status(200).json({
                    data: userEdit,
                    status: null
                }).end();
            }
            catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end();
            }
            // usuario ya editado
        }));
        // peticion DELETE
        app.delete('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
            try {
                const user = yield this.userService.deleteUser(Number(req.body.id));
                // reponde exitoso
                res.status(200).json({
                    data: user,
                    status: null
                }).end();
            }
            catch (error) {
                res.status(500).json({
                    data: null,
                    status: error
                }).end();
            }
        }));
    }
}
exports.ControllerUser = ControllerUser;
//# sourceMappingURL=user.controller.js.map