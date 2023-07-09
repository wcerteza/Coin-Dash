const router = require('express').Router()
const transactionController = require('../controllers/TransactionController')

router.get('/', transactionController.GetTransaction)

router.post('/', transactionController.CreateTransaction)

module.exports = router
