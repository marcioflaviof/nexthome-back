const { chmod } = require('fs-extra')
const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('visits')

    const getVisits = async ({id}) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)

        return await request.query(sqlQueries.getVisits)
    }

    const addVisits = async ({cod_user, cod_house, hour_visit, day_visit, is_confirmed }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input("cod_user", sql.Int, cod_user)
        request.input("cod_house", sql.Int, cod_house)
        request.input("hour_visit", sql.Time, hour_visit)
        request.input("day_visit", sql.Date, day_visit)
        request.input("is_confirmed", sql.Bit, is_confirmed)

        return await request.query(sqlQueries.addVisits)
    }

    const updateVisits = async ({ id, cod_user, cod_house, hour_visit, day_visit, is_confirmed }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "cod_user", sql.Int, cod_user)
        request.input( "cod_house", sql.Int, cod_house)
        request.input("hour_visit", sql.Time, hour_visit)
        request.input("day_visit", sql.Date, day_visit)
        request.input("is_confirmed", sql.Bit, is_confirmed)  // 1 = yes || 0 = no

        return await request.query(sqlQueries.updateVisits)
    }

    const deleteVisits = async ({ id }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)

        return request.query(sqlQueries.deleteVisits)
    }

    return {
        addVisits,
        deleteVisits,
        getVisits,
        updateVisits
    }
}

module.exports = { register }