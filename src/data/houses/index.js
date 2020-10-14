const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('houses')

    const getHouses = async ({id}) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        
        return await request.query(sqlQueries.getHouses)
    }

    const addHouses = async ({ cod_user, landSize, price, address, description }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "cod_user", sql.Int, cod_user)
        request.input("landSize", sql.NVarChar(50), landSize)
        request.input("price", sql.Float, price)
        request.input("address", sql.NVarChar(1000), address)
        request.input("description", sql.NVarChar(1000), description)

        return await request.query(sqlQueries.addHouses)
    }

    const updateHouses = async ({ id, cod_user, landSize, price, address, description }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "cod_user", sql.Int, cod_user)
        request.input("landSize", sql.NVarChar(50), landSize)
        request.input("price", sql.Float, price)
        request.input("address", sql.NVarChar(1000), address)
        request.input("description", sql.NVarChar(1000), description)

        return await request.query(sqlQueries.updateHouses)
    }

    const deleteHouses = async ({ id, cod_user }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "cod_user", sql.Int, cod_user)

        return request.query(sqlQueries.deleteHouses)
    }

    return {
        addHouses,
        deleteHouses,
        getHouses,
        updateHouses
    }
}

module.exports = { register }