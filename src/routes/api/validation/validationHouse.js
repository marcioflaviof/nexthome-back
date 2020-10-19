const Joi = require('joi')

function validationHouse ( house ) {

    const schema = Joi.object({
        cod_user: Joi.number()
            .required(),

        landSize: Joi.string()
            .required(),

        price: Joi.number()
            .required(),
        
        address: Joi.string()
            .max(1000)
            .required(),
        
        description: Joi.string()
        .max(1000),

        number_bedroom: Joi.number()
            .required(),

        number_bath: Joi.number()
            .required(),
    
    })


        
    const {error, value } = schema.validate(house)
    return {error, value}

}

function validationHousePut ( house ) {

    const schema = Joi.object({

        landSize: Joi.string()
            .required(),

        price: Joi.number()
            .required(),
        
        address: Joi.string()
            .max(1000)
            .required(),
        
        description: Joi.string()
        .max(1000),

        number_bedroom: Joi.number()
            .required(),

        number_bath: Joi.number()
            .required(),
    
    })


        
    const {error, value } = schema.validate(house)
    return {error, value}

}

module.exports = { 
    validationHouse,
    validationHousePut 
}