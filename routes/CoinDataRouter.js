const router = require('express').Router()
const coinDataController = require('../controllers/CoinDataController')

router.get('/coinData', coinDataController.getCoinData)
router.post('/coinData', coinDataController.createCoinData)

module.exports = router
