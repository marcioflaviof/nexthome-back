const utils = require('../utils')

const register = async({sql, getConnection}) => {
    const sqlQueries = await utils.loadSqlQueries('available')

    const getAvailable = async ({ id_available_hour }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id_available_hour", sql.Int, id_available_hour)
        
        return await request.query(sqlQueries.getAvailable)
    }

    const addAvailable = async ({ cod_house, min_hour_available, max_hour_available, day_week_available, cad_dta_available }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "cod_house", sql.Int, cod_house)
        request.input("min_hour_available", sql.Int, min_hour_available)
        request.input("max_hour_available", sql.Int, max_hour_available)
        request.input("day_week_available", sql.Int, day_week_available)
        request.input("cad_dta_available", sql.DateTime, cad_dta_available)

        return await request.query(sqlQueries.addAvailable)
    }

    const updateAvailable = async ({ id_available_hour, cod_house, min_hour_available, max_hour_available, day_week_available, cad_dta_available }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id_available_hour", sql.Int, id_available_hour)
        request.input( "cod_house", sql.Int, cod_house)
        request.input("min_hour_available", sql.Int, min_hour_available)
        request.input("max_hour_available", sql.Int, max_hour_available)
        request.input("day_week_available", sql.Int, day_week_available)
        request.input("cad_dta_available", sql.DateTime, cad_dta_available)

        return await request.query(sqlQueries.updateAvailable)
    }

    const deleteAvailable = async ({ id_available_hour, cod_house, day_week_available }) => {
        const cnx = await getConnection()
        const request = await cnx.request()
        request.input( "id_available_hour", sql.Int, id_available_hour)
        request.input( "cod_house", sql.Int, cod_house)
        request.input("day_week_available", sql.Int, day_week_available)

        return request.query(sqlQueries.deleteAvailable)
    }

    return {
        addAvailable,
        deleteAvailable,
        getAvailable,
        updateAvailable
    }
}

module.exports = { register }