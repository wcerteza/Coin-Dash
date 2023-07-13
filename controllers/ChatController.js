const axios = require('axios')
const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

const createChat = async (req, res) => {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello world' }]
    })

    res.status(200).json(chatCompletion.data)
  } catch (error) {
    console.error(error)
    if (error.response) {
      res.status(error.response.status).json(error.response.data)
    } else {
      res.status(500).json({ error: error.message })
    }
  }
}

module.exports = {
  createChat
}
