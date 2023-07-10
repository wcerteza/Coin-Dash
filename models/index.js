const mongoose = require('mongoose')
const userSchema = require('./User')
const coinSchema = require('./coin')

const User = mongoose.model('User', userSchema)
const Coin = mongoose.model('Coin', coinSchema)

module.exports = {
  User,
  Coin
}
