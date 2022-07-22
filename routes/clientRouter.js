const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')

router.post('/eazy', clientController.postModuleEazy)
router.post('/hard', clientController.postModuleHard)

module.exports = router