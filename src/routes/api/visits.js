const validation = require('./validation/validationVisits')

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/visit/{cod_house}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const cod_house = request.params.cod_house
                const res = await db.visits.getVisits({cod_house})

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "GET",
        path: "/visit_user/{cod_user}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const cod_user = request.params.cod_user
                const res = await db.visits.getVisitUser({cod_user})

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })


    server.route( {
        method: "POST",
        path: "/register/visit",
        handler: async request => {
            try {
                const {error, value} = validation.validationVisits(request.payload)
                if (error){return(error.message)}

                const db = request.server.plugins.sql.client
                const {cod_user, cod_house, day_hour_visit, is_confirmed} = value
                const res = await db.visits.addVisits({cod_user, cod_house, day_hour_visit, is_confirmed})

                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/visit/{id}",
        handler: async (request, h) => {
            try {
                const {error, value} = validation.validationVisits(request.payload)
                if (error){return(error.message)}

                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {cod_user, cod_house, day_hour_visit, is_confirmed} = value
                const res = await db.visits.updateVisits({id, cod_user, cod_house, day_hour_visit, is_confirmed})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/visit/{id}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.visits.deleteVisits({ id })

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
