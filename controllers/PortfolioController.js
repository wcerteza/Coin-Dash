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

const GetPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find()
    res.json(portfolios)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

const getPortfolioById = async (req, res) => {
  try {
    console.log('params', req.params)

    const portfolio = await Portfolio.findOne(req.params).populate({
      path: 'coins',
      populate: {
        path: 'coinId'
      }
    })
    res.send(portfolio)
  } catch (error) {
    res.status(404).json({ error: 'Portfolio not found!' })
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
    console.log(portfolio)
    const updatedPortfolio = await portfolio.save()
    res.send(updatedPortfolio)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createPortfolio,
  GetPortfolios,
  addCoinToPortfolio,
  getPortfolioById
}
