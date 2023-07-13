const router = require('express').Router()
const chatController = require('../controllers/ChatController')
const middleware = require('../middleware')

router.post('/', chatController.createChat)

module.exports = router
