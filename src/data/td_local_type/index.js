const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('td_local_type')

    const getLocalType = async ({ id }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        
        return await request.query(sqlQueries.getLocalType)
    }


    const addLocalType = async ({ name }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "name", sql.NVarChar(50), name)

        return await request.query(sqlQueries.addLocalType)
    }

    const updateLocalType = async ({ id, name }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "name", sql.NVarChar(50), name)


        return await request.query(sqlQueries.updateLocalType)
    }

    const deleteLocalType = async ({ id }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)


        return request.query(sqlQueries.deleteLocalType)
    }

    return {
        addLocalType,
        deleteLocalType,
        getLocalType,
        updateLocalType
    }
}

module.exports = { register }