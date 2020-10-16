const users = require('./users')
const houses = require('./houses')
const visits = require('./visits')
const available = require('./available')

module.exports.register = async server => {
    await users.register(server)
    await houses.register(server)
    await visits.register(server)
    await available.register(server)
}