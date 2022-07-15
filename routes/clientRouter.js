const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')

router.post('/', clientController.postClient)

module.exports = router