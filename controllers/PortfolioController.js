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

module.exports = {
  createPortfolio,
  getPortfolio
}
