"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
// lctura configuracion
dotenv_1.default.config();
class Config {
    constructor() {
        this.conexionString = `postgres://${process.env.USER_DATABASE}:${process.env.PASSWORD_DATABASE}@${process.env.HOST_DATABASE}:${process.env.PORT_DATABASE}/${process.env.DATABASE_DATABASE}`;
    }
    get getConexionString() {
        return this.conexionString;
    }
    set setConexionString(value) {
        this.conexionString = value;
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map