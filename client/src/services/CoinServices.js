import Client from './api'

export const GetCoins = async () => {
  try {
    const response = await Client.get('/coins')
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetCoinDetail = async (id) => {
  try {
    const response = await Client.get(`coins/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
