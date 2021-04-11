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
exports.UserService = void 0;
const config_1 = require("../config/config");
const pg_1 = require("pg");
class UserService {
    // constructor
    constructor() {
        /**
         * busca el registro por medio del id
         * @param {numer} id del elemento
         * @return {objec} registro encontrado
         */
        this.getUser = (id) => __awaiter(this, void 0, void 0, function* () {
            // Instacia configuracion DB
            const objConfig = new config_1.Config();
            // cliente DB
            const client = new pg_1.Client(objConfig.getConexionString);
            // inicia la conexion DB
            client.connect(err => {
                // si hay un fallo se imprime y lanza erro
                if (err) {
                    console.log(err);
                    throw new Error("Intenal_server_error");
                }
            });
            try {
                // hace la consula a BD
                const result = yield client.query(`SELECT * FROM users where id = ${id} AND status = 'TRUE'`);
                if (result.rowCount === 1) {
                    this.id = result.rows[0].id;
                    this.name = result.rows[0].name;
                }
                else {
                    return {};
                }
                return {
                    id: this.id,
                    name: this.name
                };
            }
            catch (error) {
                console.log(error);
                throw new Error("Intenal_server_error");
            }
        });
        /**
         * Regresa el listado de usuarios
         * @returns {array} Registros existentes
         */
        this.getUsers = () => {
            // return listUser.filter(user => user.status)
            return [];
        };
        /**
         * Agrega usuario al listado
         * @param name {string} nombre del usuari
         * @returns {object} registro ingresado
         */
        this.postUser = (name) => {
            // listUser.push({
            //     id: listUser.length + 1,
            //     name,
            //     status: true
            // })
            // return listUser[listUser.length - 1]
        };
        /**
         * edita el usuario en la matriz
         * @param id {id} identificacion del usuario
         * @param name {string} nombre del usuario
         * @returns {object} usuario editado
         */
        this.putUser = (id, name) => {
            if (id < 0) {
                throw new Error("Intebal_server_error");
            }
            const esEncontrado = false;
            // listUser.forEach((user, idx) => {
            //     if(user.id === id){
            //         this.id = user.id,
            //         this.name = name
            //         listUser[idx].name = name;
            //         esEncontrado = true
            //     }
            // })
            // if(esEncontrado){
            //     return {
            //         id: this.id,
            //         name: this.name
            //     }
            // }else{
            //     return {}
            // }
        };
        /**
         * edita el usuario en la matriz
         * @param id {id} identificacion del usuario
         * @returns {object} usuario eliminado
         */
        this.deleteUser = (id) => {
            if (id < 0) {
                throw new Error("Intebal_server_error");
            }
            const esEncontrado = false;
            // listUser.forEach((user, idx) => {
            //     if(user.id === id){
            //         listUser[idx].status = false;
            //         this.id = user.id,
            //         this.name = user.name
            //         this.status = false
            //         esEncontrado = true
            //     }
            // })
            if (esEncontrado) {
                return {
                    id: this.id,
                    name: this.name
                };
            }
            else {
                return {};
            }
        };
        this.id = -1;
        this.name = '';
        this.status = true;
    }
    /**
     * obtiene el indice del objecto
     * @param id {number} id del usuario
     * @returns {number} indice del objecto ó -1 si no loo encuentra
     */
    getIdxUser(id) {
        // listUser.forEach((user, idx) => {
        //     if(user.id === id){
        //         return idx
        //     }
        // })
        return -1;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map