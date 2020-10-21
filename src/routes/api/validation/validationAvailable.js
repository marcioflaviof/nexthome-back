const Joi = require('joi')

function validationAvailable ( available ) {

    const schema = Joi.object({
        cod_house: Joi.number()
            .integer()
            .required(),

        min_hour_available: Joi.string()
            .required(),


        max_hour_available: Joi.string()
            .required(),
        
        day_week_available: Joi.number()
            .integer(0)
            .min(0)
            .max(7)
            .required(),
        
    })


        
    const {error, value } = schema.validate(available)
    return {error, value}

}

function validationAvailablePut ( available ) {

    const schema = Joi.object({

        min_hour_available: Joi.string()
            .alphanum()
            .required(),


        max_hour_available: Joi.string()
            .alphanum()
            .required(),
        
        day_week_available: Joi.number()
            .integer(0)
            .min(0)
            .max(7)
            .required(),
        
    })


        
    const {error, value } = schema.validate(available)
    return {error, value}

}

module.exports = { 
    validationAvailable,
    validationAvailablePut
}