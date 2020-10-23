module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/local/{id}",
        handler: async request => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.tb_local.getLocal(id)

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "POST",
        path: "/register/local",
        handler: async request => {
            try {

                const db = request.server.plugins.sql.client
                const {name, cod_local_father, cod_type_local} = request.payload
                const res = await db.tb_local.addLocal({name, cod_local_father, cod_type_local})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/local/{id}",
        handler: async (request, h) => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {name} = request.payload
                const res = await db.tb_local.updateLocal({id, name})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/local/{id}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.tb_local.deleteLocal({id})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
