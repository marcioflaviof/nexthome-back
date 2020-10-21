const validation = require('./validation/validationHouse')

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/house/{id}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const id = request.params.id
                const res = await db.houses.getHouses({id})

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "POST",
        path: "/register/house",
        handler: async (request, h) => {
            try {
                const {error, value} = validation.validationHouse(request.payload)
                if (error){return(h.response(error.message).code( 400 ) )}

                const db = request.server.plugins.sql.client
                const {cod_user, landSize, price, address, description, number_bedroom, number_bath, to_sell} = value
                const res = await db.houses.addHouses({cod_user, landSize, price, address, description, number_bedroom, number_bath, to_sell})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/house/{id}/{cod_user}",
        handler: async (request, h) => {
            try {
                const {error, value} = validation.validationHousePut(request.payload)
                if (error){return(h.response(error.message).code( 400 ))}

                const id = request.params.id
                const cod_user = request.params.cod_user
                const db = request.server.plugins.sql.client
                const {landSize, price, address, description, number_bedroom, number_bath, to_sell} = value
                const res = await db.houses.updateHouses({id, cod_user, landSize, price, address, description, number_bedroom, number_bath, to_sell})
        
                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/house/{id}/{cod_user}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const cod_user = request.params.cod_user
                const db = request.server.plugins.sql.client
                const res = await db.houses.deleteHouses({id, cod_user})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
