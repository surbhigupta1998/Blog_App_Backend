const Joi = require('joi');

const registerVal = data => { 
const schema = Joi.object({
    name:Joi.string()
    .min(6)
    .required(),

    email:Joi.string()
    .min(6)
    .required()
    .email(),

    password: Joi.string()
    .min(6)
    .required(),
})
    return schema.validate(data)
};
const loginVal = data => { 
    const schema = Joi.object({
        email:Joi.string()
        .min(6)
        .required()
        .email(),
    
        password: Joi.string()
        .min(6)
        .required(),
    })
        return schema.validate(data)
    };


module.exports =  registerVal;
module.exports = loginVal;