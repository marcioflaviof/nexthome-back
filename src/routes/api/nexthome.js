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
}