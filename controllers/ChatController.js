const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()
const Chat = require('../models/Chat')

const configuration = new Configuration({
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

const createChat = async (req, res) => {
  try {
    const userInput = req.body.content

    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userInput }]
    })

    const completionContent = chatCompletion.data.choices[0].message.content

    const chatData = new Chat({
      input: userInput,
      completion: completionContent
    })
    await chatData.save()

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
