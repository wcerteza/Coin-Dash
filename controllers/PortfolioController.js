const { Portfolio } = require('../models')

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

    if (portfolio) {
      portfolio.coins.push({ coinId })
      const updatedPortfolio = await portfolio.save()
      res.send(updatedPortfolio)
    } else {
    }
  } catch (error) {
    let newPortfolio = { coins: [] }
    newPortfolio.userId = req.body.userId
    newPortfolio.coins.push({ coinId })
    createdPortfolio = await Portfolio.create(newPortfolio)
    res.send(createdPortfolio)
  }
}

const deleteCoinFromPortfolio = async (req, res) => {
  const portfolioId = req.params.portfolioId
  const coinId = req.params.coinId
  const portfolio = await Portfolio.findById(portfolioId)
  portfolio.coins.splice(coinId, 1)
  const updatedPortfolio = await portfolio.save()
  res.send(updatedPortfolio)
}

module.exports = {
  createPortfolio,
  GetPortfolios,
  addCoinToPortfolio,
  getPortfolioById,
  deleteCoinFromPortfolio
}
