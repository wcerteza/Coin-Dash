import Client from './api'

export const GetPortfolios = async () => {
  try {
    const response = await Client.get('/portfolios')
    return response.data
  } catch (error) {
    throw error
  }
}

export const CreatePortfolio = async (portfolioData) => {
  try {
    const response = await Client.post('/portfolios', portfolioData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const AddCoinToPortfolio = async (portfolioId, coinData) => {
  try {
    const response = await Client.put(`/portfolios/${portfolioId}`, coinData)
    return response.data
  } catch (error) {
    throw error
  }
}
