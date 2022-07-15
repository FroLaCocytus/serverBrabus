const Router = require('express')
const router = new Router()
const clientRouter = require('./clientRouter')

router.use('/client', clientRouter)

module.exports = router