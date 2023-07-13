import Client from './api'

export const createChat = async (content) => {
  try {
    const response = await Client.post('/chats', { content })
    return response.data.choices[0].message.content
  } catch (error) {
    throw error
  }
}
