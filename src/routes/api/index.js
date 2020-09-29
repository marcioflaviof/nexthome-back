const users = require('./nexthome')

module.exports.register = async server => {
    await users.register(server)
}