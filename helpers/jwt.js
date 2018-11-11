const expressJwt = require('express-jwt')
const config = require('../config.json')
const userService = require('../users/userService')



jwt = () => {
    const secret = config.secret
    return expressJwt({
        secret, 
        isRevoked
    })
    .unless({
        path: [
            '/api/users/authenticate', 
            '/api/users/register',
            '/api/users/getcurrent'
        ]
    })
}

isRevoked = async (req, payload, done) => {
    const user = await userService.getById(payload.sub)

    //revoke token if user no longer exists
    if (!user) {
        return done(null, true)
    }

    done()
}

module.exports = jwt;