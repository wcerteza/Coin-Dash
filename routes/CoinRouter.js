const router = require('express').Router()
const coinController = require('../controllers/CoinController')
const middleware = require('../middleware')

router.get('/:coin_id', coinController.GetCoinDetail)
router.get(
  '/apicoins',
  middleware.stripToken,
  middleware.verifyToken,
  coinController.GetApiCoins
)
router.get('/', coinController.GetCoins)
router.post('/', coinController.CreateCoin)
router.put('/:coin_id', coinController.UpdateCoin)
router.delete('/:coin_id', coinController.DeleteCoin)

module.exports = router
