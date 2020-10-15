const Joi = require('joi')

function validationUser ( user ) {

    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(4)
            .required(),

        email: Joi.string()
            .email()
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{6,42}$'))
            .required(),
        
        cellphone: Joi.string()
            .min(8)
            .max(12)
            .pattern(new RegExp('^[0-9]+$'))
            .required(),
        
        cpf: Joi.string()
            .length(11),
        
        address: Joi.string()
            .max(1000)
            .required(),
    })


        
    const {error, value } = schema.validate(user)
    return {error, value}

}

module.exports = { validationUser }