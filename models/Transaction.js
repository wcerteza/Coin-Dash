const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const transactionSchema = new Schema({
  coin: {
    type: Schema.Types.ObjectId,
    ref: 'coin',
    required: true
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transaction', transactionSchema)
