import Client from './api'

export const GetCoins = async () => {
  try {
    const response = await Client.get('/coins')
    return response.data
  } catch (error) {
    throw error
  }
}
