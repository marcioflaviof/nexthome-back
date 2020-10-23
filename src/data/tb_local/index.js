const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('tb_local')

    const getLocal = async ({ id }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        
        return await request.query(sqlQueries.getLocal)
    }


    const addLocal = async ({ name, cod_local_father, cod_type_local }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "name", sql.NVarChar(50), name)
        request.input( "cod_local_father", sql.Int, cod_local_father)
        request.input( "cod_type_local", sql.Int, cod_type_local)

        return await request.query(sqlQueries.addLocal)
    }

    const updateLocal = async ({ id, name }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "name", sql.NVarChar(50), name)


        return await request.query(sqlQueries.updateLocal)
    }

    const deleteLocal = async ({ id }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)


        return request.query(sqlQueries.deleteLocal)
    }

    return {
        addLocal,
        deleteLocal,
        getLocal,
        updateLocal
    }
}

module.exports = { register }