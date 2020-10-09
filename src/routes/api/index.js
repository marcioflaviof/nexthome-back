const users = require('./users')
const houses = require('./houses')
const visits = require('./visits')

module.exports.register = async server => {
    await users.register(server)
    await houses.register(server)
    await visits.register(server)
}