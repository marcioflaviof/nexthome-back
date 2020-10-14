const validation = require('./validation/validationUser')

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/user/{id}",
        handler: async request => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.users.getUsers(id)

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "POST",
        path: "/register/user",
        handler: async request => {
            try {
                const {error, value} = validation.validationUser(request.payload)
                if (error){return(error.message)}
                
                const db = request.server.plugins.sql.client
                const {username, email, password, cellphone, cpf, address} = value
                const res = await db.users.addUsers({username, email, password, cellphone, cpf, address})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/user/{id}",
        handler: async (request, h) => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {username, email, password, cellphone, cpf, address} = request.payload
                const res = await db.users.updateUsers({id, username, email, password, cellphone, cpf, address})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/user/{id}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const email = request.payload.email
                const db = request.server.plugins.sql.client
                const res = await db.users.deleteUsers({id, email})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
