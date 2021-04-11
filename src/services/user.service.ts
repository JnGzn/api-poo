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
    public getUsers = async (): Promise<any[]> => {
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
            const result = await client.query(`SELECT * FROM users where  status = 'TRUE'`)
            if(result.rowCount > 0){
                return result.rows
            }else{
                return []
            }


        } catch (error) {
            console.log(error);

            throw new Error("Intenal_server_error");
        }
    }

    /**
     * Agrega usuario al listado
     * @param name {string} nombre del usuari
     * @returns {object} registro ingresado
     */
    public postUser = async (name: string): Promise<any> =>{

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
             const result = await client.query(`INSERT INTO users(name) values ('${name}')`)
             console.log(result);

             if(result.rowCount > 0){
                 return {
                    name
                 }
             }else{
                 return {}
             }


         } catch (error) {
             console.log(error);

             throw new Error("Intenal_server_error");
         }
    }

    /**
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @param name {string} nombre del usuario
     * @returns {object} usuario editado
     */
    public putUser = async (id: number, name: string): Promise<any> => {

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
             const result = await client.query(`UPDATE users SET name='${name}' where id = '${id}'`)
             console.log(result);

             if(result.rowCount > 0){
                 return {
                     id,
                     name
                 }
             }else{
                 return []
             }


         } catch (error) {
             console.log(error);

             throw new Error("Intenal_server_error");
         }

    }

    /**
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @returns {object} usuario eliminado
     */
     public deleteUser = async (id: number): Promise<any> => {

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
            const result = await client.query(`UPDATE users SET status='false' where id = '${id}'`)
            console.log(result);

            if(result.rowCount > 0){
                return {
                    id
                }
            }else{
                return []
            }


        } catch (error) {
            console.log(error);

            throw new Error("Intenal_server_error");
        }


    }

}