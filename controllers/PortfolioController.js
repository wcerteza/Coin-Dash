const Portfolio = require('../models/Portfolio')

const createPortfolio = async (req, res) => {
  try {
    const { userId, coins } = req.body
    const portfolio = await Portfolio.create({ userId, coins })
    res.send(portfolio)
  } catch (error) {
    throw error
  }
}

const getPortfolio = async (req, res) => {
  try {
    const portfolios = await Portfolio.find()
    res.json(portfolios)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

const addCoinToPortfolio = async (req, res) => {
  const { portfolioId } = req.params
  const { coinId } = req.body
  try {
    const portfolio = await Portfolio.findById(portfolioId)
    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' })
    }
    portfolio.coins.push({ coinId })
    const updatedPortfolio = await portfolio.save()
    res.send(updatedPortfolio)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createPortfolio,
  getPortfolio,
  addCoinToPortfolio
}
