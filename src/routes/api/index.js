const users = require('./users')
const houses = require('./houses')

module.exports.register = async server => {
    await users.register(server)
    await houses.register(server)
}