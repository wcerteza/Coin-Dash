const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const coinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Coin', coinSchema)
