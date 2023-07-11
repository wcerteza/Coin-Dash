const router = require('express').Router()
const portfolioController = require('../controllers/PortfolioController')

router.post('/', portfolioController.createPortfolio)
router.get('/', portfolioController.getPortfolio)
router.put('/:portfolioId', portfolioController.addCoinToPortfolio)

module.exports = router
