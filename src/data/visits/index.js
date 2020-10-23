const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('visits')

    const getVisits = async ({cod_house}) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "cod_house", sql.Int, cod_house)

        return await request.query(sqlQueries.getVisits)
    }

    const getVisitUser = async ({cod_user}) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "cod_user", sql.Int, cod_user)

        return await request.query(sqlQueries.getVisitsUser)
    }

    const getSpecificVisit = async ({id, cod_user, cod_house}) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "cod_user", sql.Int, cod_user)
        request.input( "cod_house", sql.Int, cod_house)

        return await request.query(sqlQueries.getSpecificVisit)
    }

    const addVisits = async ({cod_user, cod_house, day_hour_visit, is_confirmed }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input("cod_user", sql.Int, cod_user)
        request.input("cod_house", sql.Int, cod_house)
        request.input("day_hour_visit", sql.DateTime, day_hour_visit)
        request.input("is_confirmed", sql.Bit, is_confirmed)

        return await request.query(sqlQueries.addVisits)
    }

    const updateVisits = async ({ id, cod_user, cod_house, day_hour_visit, is_confirmed }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id", sql.Int, id)
        request.input( "cod_user", sql.Int, cod_user)
        request.input( "cod_house", sql.Int, cod_house)
        request.input("day_hour_visit", sql.DateTime, day_hour_visit)
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
        getSpecificVisit,
        getVisits,
        getVisitUser,
        updateVisits
    }
}

module.exports = { register }