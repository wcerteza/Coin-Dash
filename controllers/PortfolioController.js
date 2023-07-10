const Portfolio = require('../models/Portfolio')

const createPortfolio = async (req, res) => {
  try {
    const { userId } = req.body
    const portfolio = await Portfolio.create({ userId })
    res.send(portfolio)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createPortfolio
}
