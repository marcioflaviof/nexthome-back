module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/user",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const userName = 'MarcioF'
                const res = await db.users.getUsers(userName)

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
                const db = request.server.plugins.sql.client
                const {username, email, password, cellphone, cpf, address} = request.payload
                const res = await db.users.addUsers({username, email, password, cellphone, cpf, address})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })
}
