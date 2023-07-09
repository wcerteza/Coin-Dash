const CoinData = require('../models/coin')

const getCoinData = async (req, res) => {
  try {
    const coinData = await CoinData.find({}).populate('coinId')
    res.send(coinData)
  } catch (error) {
    throw error
  }
}

const createCoinData = async (req, res) => {
  try {
    const coinData = await CoinData.create({ ...req.body })
    res.send(coinData)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCoinData,
  createCoinData
}
