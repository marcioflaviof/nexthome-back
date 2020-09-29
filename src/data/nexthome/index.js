const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('nexthome')

    const getUsers = async name => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input('name', sql.VarChar(50), name)
        return await request.query(sqlQueries.getUsers)
    }

    return {
        getUsers
    }
}

module.exports = { register }