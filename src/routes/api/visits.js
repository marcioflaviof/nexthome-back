module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/visit/{id}/{cod_user}/{cod_house}",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const id = request.params.id
                const cod_user = request.params.cod_user
                const cod_house = request.params.cod_house
                
                const res = await db.visits.getVisits({id, cod_user, cod_house})

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
                const db = request.server.plugins.sql.client
                const {cod_user, cod_house, hour_visit, day_visit, is_confirmed} = request.payload
                const res = await db.visits.addVisits({cod_user, cod_house, hour_visit, day_visit, is_confirmed})
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
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {cod_user, cod_house, hour_visit, day_visit, is_confirmed} = request.payload
                const res = await db.visits.updateVisits({id, cod_user, cod_house, hour_visit, day_visit, is_confirmed})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/visit/{id}/{cod_user}/{cod_house}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const cod_user = request.params.cod_user
                const cod_house = request.params.cod_house
                const db = request.server.plugins.sql.client
                const res = await db.visits.deleteVisits({id, cod_user, cod_house})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
