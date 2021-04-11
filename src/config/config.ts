
import fotenv from "dotenv";

// lctura configuracion
fotenv.config()


export class Config {
    private conexionString: string;

    constructor() {
        this.conexionString = `postgres://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@${process.env.HOST_DATABASE}:${process.env.PORT_DATABASE}/${process.env.DATABASE_DATABASE}`
    }



    public get getConexionString(): string {
        return this.conexionString;
    }
    public set setConexionString(value: string) {
        this.conexionString = value;
    }
}