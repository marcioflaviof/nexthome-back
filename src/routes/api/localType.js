module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/local_type/{id}",
        handler: async request => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.td_local_type.getLocalType(id)

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "POST",
        path: "/register/local_type",
        handler: async request => {
            try {

                const db = request.server.plugins.sql.client
                const {name} = request.payload
                const res = await db.td_local_type.addLocalType({name})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/local_type/{id}",
        handler: async (request, h) => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {name} = request.payload
                const res = await db.td_local_type.updateLocalType({id, name})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/local_type/{id}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.td_local_type.deleteLocalType({id})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
