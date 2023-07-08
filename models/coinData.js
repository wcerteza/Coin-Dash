const { Schema } = require('mongoose')

const coinDataSchema = new Schema({
  coinId: {
    type: Schema.Types.ObjectId,
    ref: 'Coin',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = coinDataSchema
