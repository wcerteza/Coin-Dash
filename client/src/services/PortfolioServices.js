import Client from './api'

export const GetPortfolios = async () => {
  try {
    const response = await Client.get('/portfolio')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getPortfolioByUserId = async (userId) => {
  try {
    const response = await Client.get(`/portfolio/user/${userId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const CreatePortfolio = async (portfolioData) => {
  try {
    const response = await Client.post('/portfolio', portfolioData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const AddCoinToPortfolio = async (portfolioId, coinData) => {
  try {
    const response = await Client.put(`/portfolio/${portfolioId}`, coinData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const DeleteCoinFromPortfolio = async (portfolioId, coinId) => {
  try {
    const response = await Client.put(
      `/portfolio/${portfolioId}/coins/${coinId}`
    )
    getPortfolioByUserId(portfolioId)
    return response.data.coins
  } catch (error) {
    throw error
  }
}
