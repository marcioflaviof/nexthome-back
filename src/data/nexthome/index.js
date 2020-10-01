const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('nexthome')

    const getUsers = async name => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input('name', sql.VarChar(50), name)
        return await request.query(sqlQueries.getUsers)
    }

    const addUsers = async ({ username, email, password, cellphone, cpf, address }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        var binBuff = Buffer.from(password, 'base64')
        request.input("username", sql.NVarChar(50), username)
        request.input("email", sql.NVarChar(50), email)
        request.input("password", sql.VarBinary(50), binBuff)
        request.input("cellphone", sql.NVarChar(20), cellphone)
        request.input("cpf", sql.NVarChar(20), cpf)
        request.input("address", sql.NVarChar(1000), address)
        return await request.query(sqlQueries.addUsers)
        
    }

    const updateUsers = async ({ id, username, password, email, cellphone, cpf, address }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        var binBuff = Buffer.from(password, 'base64')
        request.input( "id", sql.Int, id)
        request.input("username", sql.NVarChar(50), username)
        request.input("email", sql.NVarChar(50), email)
        request.input("password", sql.VarBinary(50), binBuff)
        request.input("cellphone", sql.NVarChar(20), cellphone)
        request.input("cpf", sql.NVarChar(20), cpf)
        request.input("address", sql.NVarChar(1000), address)

        return await request.query(sqlQueries.updateUsers)
    }

    const deleteUsers = async ({ id, username }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "username", sql.NVarChar(50), username)
        console.log("Ta chegando aqui", id, username)
        return request.query(sqlQueries.deleteUsers)
    }

    return {
        addUsers,
        deleteUsers,
        getUsers,
        updateUsers
    }
}

module.exports = { register }