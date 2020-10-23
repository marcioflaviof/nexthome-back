const users = require('./users')
const houses = require('./houses')
const visits = require('./visits')
const available = require('./available')
const local = require('./tb_local')
const localType = require('./td_local_type')
const sql = require('mssql')


const client = async(server, config) => {
    let pool = null

    const closePool = async () => {
        try {
            await pool.close()
            pool = null
        } catch(err) {
            pool = null
            console.log(err)
        }
    }

    const getConnection = async () => {
        try {
            if(pool) {
                return pool
            }
            pool = await sql.connect(config)
            pool.on('error', async err => {
                console.log(err)
                await closePool()
            })
            return pool
        } catch(err) {
            console.log(err)
            pool = null
        }
    }

    return {
        users: await users.register({ sql, getConnection }),
        houses: await houses.register({ sql, getConnection }),
        visits: await visits.register({ sql, getConnection }),
        available: await available.register ({ sql, getConnection }),
        local: await local.register ({ sql, getConnection }),
        localType: await localType.register ({ sql, getConnection })
    }
}

module.exports = client