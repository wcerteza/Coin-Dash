const router = require('express').Router()
const coinController = require('../controllers/CoinController')

router.get('/', coinController.GetCoins)
router.post('/', coinController.CreateCoin)
router.put('/:coin_id', coinController.UpdateCoin)
router.delete('/:coin_id', coinController.DeleteCoin)

module.exports = router
