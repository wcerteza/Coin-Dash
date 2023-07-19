const mongoose = require('mongoose')
const userSchema = require('./User')

const portfolioSchema = require('./Portfolio')
const chatSchema = require('./Chat')
const coinSchema = require('./Coin')

const User = mongoose.model('User', userSchema)
const Coin = mongoose.model('Coin', coinSchema)
const Portfolio = mongoose.model('Portfolio', portfolioSchema)
const Chat = mongoose.model('Chat', chatSchema)

module.exports = {
  User,
  Coin,
  Portfolio,
  Chat
}
