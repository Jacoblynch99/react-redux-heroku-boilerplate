let jwt = require('express-jwt')
let jwks = require('jwks-rsa')
require('dotenv').config()

const logger = () => {}

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: process.env.AUTH0_IDENTITY,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256'],
})

module.exports = {
    jwtCheck,
}
