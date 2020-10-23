const users = require('./users')
const houses = require('./houses')
const visits = require('./visits')
const available = require('./available')
const local = require('./local')
const localType = require('./localType')

module.exports.register = async server => {
    await users.register(server)
    await houses.register(server)
    await visits.register(server)
    await available.register(server)
    await local.register(server)
    await localType.register(server)
}