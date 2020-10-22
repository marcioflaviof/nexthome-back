const validation = require('./validation/validationAvailable')
const dayBuilder = require('../utils')

// Available refers to available hours the owner has to effectively sell the house (show, meet in person, etc.)

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/available/{id_available_hour}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const id_available_hour = request.params.id_available_hour
                const res = await db.available.getAvailable({id_available_hour})

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "GET",
        path: "/available/day/{cod_house}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const cod_house = request.params.cod_house
                const res = await db.available.getDayAvailable({cod_house})
                const day = res.recordset
                let array_retorno = [];
                day.forEach(element => {
                    array_retorno.push(dayBuilder(element.min_hour_available,element.max_hour_available,element.day_week_available))
                });

                return array_retorno
            } catch(err) {
                console.log(err)
            }
        }
    })

    //mesma coisa que a função de cima, a diferença é que agora a gente vai passar uma data.
    //Essa função vai pegar essa data, identificar o dia da semana e retornar os horários disponíveis  
    server.route( {
        method: "GET",
        path: "/available/day/{cod_house}/{date}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const cod_house = request.params.cod_house
                const date = request.params.date
                const res = await db.available.getDayAvailableDate({cod_house,date})
                const day = res.recordset
                let array_retorno = [];
                day.forEach(element => {
                    array_retorno.push(dayBuilder(element.min_hour_available,element.max_hour_available,element.day_week_available))
                });

                return array_retorno.length > 0? array_retorno : ["tchau"]
            } catch(err) {
                console.log(err)
            }
        }
    })


    server.route( {
        method: "POST",
        path: "/register/available",
        handler: async (request, h) => {
            try {
                const {error, value} = validation.validationAvailable(request.payload)
                if (error){return(h.response(error.message).code( 400 ))}

                const db = request.server.plugins.sql.client
                const {cod_house, min_hour_available, max_hour_available, day_week_available, cad_dta_available} = value
                const res = await db.available.addAvailable({cod_house, min_hour_available, max_hour_available, day_week_available, cad_dta_available})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/available/{id_available_hour}/{cod_house}/{day_week_available}",
        handler: async (request, h) => {
            try {
                const {error, value} = validation.validationAvailablePut(request.payload)
                if (error){return(h.response(error.message).code( 400 ))}

                const id_available_hour = request.params.id_available_hour
                const cod_house = request.params.cod_house
                const day_week_available = request.params.day_week_available
                const db = request.server.plugins.sql.client
                const { min_hour_available, max_hour_available, cad_dta_available} = value
                const res = await db.available.updateAvailable({id_available_hour, cod_house, min_hour_available, max_hour_available, day_week_available, cad_dta_available})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : h.response("Not found").code( 400 )
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/available/{id_available_hour}/{cod_house}/{day_week_available}",
        handler: async (request, h) => {
            try{
                const id_available_hour = request.params.id_available_hour
                const cod_house = request.params.cod_house
                const day_week_available = request.params.day_week_available
                const db = request.server.plugins.sql.client
                const res = await db.available.deleteAvailable({id_available_hour, cod_house, day_week_available})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
