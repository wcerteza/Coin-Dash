const router = require('express').Router()
const portfolioController = require('../controllers/PortfolioController')

router.post('/', portfolioController.createPortfolio)

module.exports = router
