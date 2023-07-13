const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const chatSchema = new Schema({
  input: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Chat', chatSchema)
