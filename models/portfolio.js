const { Schema } = require('mongoose')

const portfolioSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  coins: [
    {
      coinId: {
        type: Schema.Types.ObjectId,
        ref: 'Coin',
        required: true
      }
    }
  ]
})

module.exports = portfolioSchema
