const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const CoinRouter = require('./routes/CoinRouter')
const TransactionRouter = require('./routes/TransactionRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/coins', CoinRouter)
app.use('/transactions', TransactionRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
