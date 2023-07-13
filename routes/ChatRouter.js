const router = require('express').Router()
const chatController = require('../controllers/ChatController')
const middleware = require('../middleware')

router.get('/', chatController.createChat)

module.exports = router
