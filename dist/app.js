"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacion de librerias
const user_controller_1 = require("./routes/user.controller");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    // constructor de la clase App
    constructor() {
        this.rutasUser = new user_controller_1.ControllerUser();
        this.app = express_1.default();
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
        // inicio routes
        this.rutasUser.routes(this.app);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map