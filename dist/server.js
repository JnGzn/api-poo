"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacin librerias
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
// lctura configuracion
dotenv_1.default.config();
const port = process.env.SERVER_PORT || 3000;
// Instancia de la clase App
const objApp = new app_1.default();
// Inicializacion HTTP
objApp.app.listen(port, () => {
    console.log(`Se esta corriendo el servidor en el puerto ${port}`);
});
// app.listen(3000)
//# sourceMappingURL=server.js.map