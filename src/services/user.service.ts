// definicion listado usuario
const listUser = [
    {
        id: 1,
        name: 'Juan',
        status: true
    },
    {
        id: 2,
        name: 'Gabriel',
        status: true
    },
    {
        id: 3,
        name: 'Garzon',
        status: true
    }
]

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
    public getUser = (id: number): any => {
        let esEncontrado = false
        listUser.forEach(user => {
            // si ID enviado coincide con el listado
            if(user.id === id && user.status) {
                this.id = user.id
                this.name = user.name
                esEncontrado = true
            }
        })


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
     * Regresa el listado de usuarios
     * @returns {array} Registros existentes
     */
    public getUsers = (): any[] => {
        return listUser.filter(user => user.status)
    }

    /**
     * Agrega usuario al listado
     * @param name {string} nombre del usuari
     * @returns {object} registro ingresado
     */
    public postUser = (name: string): any =>{

        listUser.push({
            id: listUser.length + 1,
            name,
            status: true
        })

        return listUser[listUser.length - 1]
    }

    /**
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @param name {string} nombre del usuario
     * @returns {object} usuario editado
     */
    public putUser = (id: number, name: string): any => {

        let esEncontrado = false;
        listUser.forEach((user, idx) => {
            if(user.id === id){
                this.id = user.id,
                this.name = name
                listUser[idx].name = name;
                esEncontrado = true
            }
        })

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
     * edita el usuario en la matriz
     * @param id {id} identificacion del usuario
     * @returns {object} usuario eliminado
     */
     public deleteUser = (id: number): any => {

        let esEncontrado = false;
        listUser.forEach((user, idx) => {
            if(user.id === id){
                listUser[idx].status = false;
                this.id = user.id,
                this.name = user.name
                this.status = false
                esEncontrado = true
            }
        })

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
        listUser.forEach((user, idx) => {
            if(user.id === id){
                return idx
            }
        })
        return -1;
    }
}