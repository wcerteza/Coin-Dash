const Transaction = require('../models/Transaction')

const CreateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create({ ...req.body })
    res.status(201).json(transaction)
  } catch (error) {
    throw error
  }
}

const GetTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find()
    res.json(transactions)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateTransaction,
  GetTransaction
}
