"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaUserDelete = exports.schemaUserPut = exports.schemaUserPost = exports.schemaUserGet = void 0;
const joi_1 = __importDefault(require("joi"));
// define esquema usuario Get
exports.schemaUserGet = joi_1.default.object().keys({
    id: joi_1.default.number().required()
});
// define esquema usuario Post
exports.schemaUserPost = joi_1.default.object().keys({
    name: joi_1.default.string().required()
});
// define esquema usuario Put
exports.schemaUserPut = joi_1.default.object().keys({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
// define esquema usuario Delete
exports.schemaUserDelete = joi_1.default.object().keys({
    id: joi_1.default.number().required(),
});
//# sourceMappingURL=user.validate.js.map