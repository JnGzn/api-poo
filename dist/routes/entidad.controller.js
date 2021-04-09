"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerEntidad = void 0;
class ControllerEntidad {
    // atributos de la clase
    routes(app) {
        // peticion GET
        app.get('/', (req, res) => {
            res.send('Hello Word');
        });
    }
}
exports.ControllerEntidad = ControllerEntidad;
//# sourceMappingURL=entidad.controller.js.map