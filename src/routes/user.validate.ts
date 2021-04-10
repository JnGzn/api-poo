import joi from "joi";

// define esquema usuario Get
export const schemaUserGet = joi.object().keys({
    id: joi.number().required()
})

// define esquema usuario Post
export const schemaUserPost = joi.object().keys({
    name: joi.string().required()
})

// define esquema usuario Put
export const schemaUserPut = joi.object().keys({
    id: joi.number().required(),
    name: joi.string().required()
})

// define esquema usuario Delete
export const schemaUserDelete = joi.object().keys({
    id: joi.number().required(),
})

