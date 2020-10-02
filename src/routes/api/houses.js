module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/house",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const houseId = 1
                const res = await db.houses.getHouses(houseId)

                return res.recordset
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "POST",
        path: "/register/house",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client
                const {landSize, price, address, description} = request.payload
                const res = await db.houses.addHouses({landSize, price, address, description})
                return res.recordset[ 0 ]
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "PUT",
        path: "/update/house/{id}",
        handler: async (request, h) => {
            try {
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const {landSize, price, address, description} = request.payload
                const res = await db.houses.updateHouses({id, landSize, price, address, description})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })

    server.route( {
        method: "DELETE",
        path: "/delete/house/{id}",
        handler: async (request, h) => {
            try{
                const id = request.params.id
                const db = request.server.plugins.sql.client
                const res = await db.houses.deleteHouses({id})

                return res.rowsAffected[ 0 ] === 1 ? h.response().code( 204 ) : "Not found"
            } catch(err) {
                console.log(err)
            }
        }
    })
}
