const { Schema } = require('mongoose')

const coinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  current_price: {
    type: Number,
    required: true
  },
  total_volume: {
    type: Number,
    required: true
  },
  market_cap_rank: {
    type: Number,
    required: true
  }
})

module.exports = coinSchema
