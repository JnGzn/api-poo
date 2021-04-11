import { Config } from '../config/config';
import { Client } from "pg";

export class UserService {
    // define atributos de la clase UserService
    private id: number
    private name: string
    private status: boolean

    // constructor
    constructor() {
        this.id = -1
        this.name = ''
        this.status = true;
    }

    /**
     * busca el registro por medio del id
     * @param {numer} id del elemento
     * @return {objec} registro encontrado
     */
    public getUser = async (id: number): Promise<any> => {

        // Instacia configuracion DB
        const objConfig = new Config()
        // cliente DB
        const client = new Client(objConfig.getConexionString)

        // inicia la conexion DB
        client.connect(err => {
            // si hay un fallo se imprime y lanza erro
            if(err){
                console.log(err);
                throw new Error("Intenal_server_error")
            }
        })

        try {
            // hace la consula a BD
            const result = await client.query(`SELECT * FROM users where id = ${id} AND status = 'TRUE'`)
            if(result.rowCount === 1){
                this.id = result.rows[0].id
                this.name = result.rows[0].name
            }else{
                return {}
            }

            return {
                id: this.id,
                name: this.name
            }

        } catch (error) {
            console.log(error);

            throw new Error("Intenal_server_error");
        }

    }


    /**
     * Regresa el listado de usuarios
     * @returns {array} Registros existentes
     */
    public getUsers = (): any[] => {
        // return listUser.filter(user => user.status)
        return [];
    }

    /**
     * Agrega usuario al listado
     * @param name {string} nombre del usuari
     * @returns {object} registro ingresado
     */
    public postUser = (name: string): any =>{

        // listUser.push({
        //     id: listUser.length + 1,
        //     name,
        //     status: true
        // })

        // return listUser[listUser.length - 1]
    }

    /**
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @param name {string} nombre del usuario
     * @returns {object} usuario editado
     */
    public putUser = (id: number, name: string): any => {

        if(id < 0){
            throw new Error("Intebal_server_error")
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
    }

    /**
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @returns {object} usuario eliminado
     */
     public deleteUser = (id: number): any => {

        if(id < 0){
            throw new Error("Intebal_server_error")
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

        if(esEncontrado){
            return {
                id: this.id,
                name: this.name
            }
        }else{
            return {}
        }


    }

    /**
     * obtiene el indice del objecto
     * @param id {number} id del usuario
     * @returns {number} indice del objecto ó -1 si no loo encuentra
     */
    private  getIdxUser(id: number){
        // listUser.forEach((user, idx) => {
        //     if(user.id === id){
        //         return idx
        //     }
        // })
        return -1;
    }
}