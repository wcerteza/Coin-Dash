const router = require('express').Router()
const portfolioController = require('../controllers/PortfolioController')

router.post('/', portfolioController.createPortfolio)
router.get('/user/:userId', portfolioController.getPortfolioById)
router.get('/', portfolioController.GetPortfolios)
router.put('/:portfolioId', portfolioController.addCoinToPortfolio)
router.put(
  '/:portfolioId/coins/:coinId',
  portfolioController.deleteCoinFromPortfolio
)

module.exports = router
