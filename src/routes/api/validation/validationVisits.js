const Joi = require('joi')

function validationVisits ( visit ) {

    const schema = Joi.object({
        cod_user: Joi.number()
            .required(),

        cod_house: Joi.number()
            .required(),

        day_hour_visit: Joi.string()
            .required(),
        
        is_confirmed: Joi.number()
            .integer()
            .min(0)
            .max(1)
            .required(),
        
    
    })


        
    const {error, value } = schema.validate(visit)
    return {error, value}

}





module.exports = { 
    validationVisits,
}