import { useNavigate } from 'react-router-dom'
import { DeleteCoinFromPortfolio } from '../services/PortfolioServices'
import { Profiler } from 'react'

const Portfolio = ({ user, portfolio, setLookForPortfolio }) => {
  let navigate = useNavigate()

  const handleDeleteCoin = async (coinId) => {
    try {
      await DeleteCoinFromPortfolio(portfolio._id, coinId)
      setLookForPortfolio(true)
    } catch (error) {
      throw error
    }
  }

  return user && portfolio ? (
    <div className="portfolio-page">
      <h1>Your Coins</h1>
      {portfolio.coins.map((coin, idx) => (
        <div key={coin._id} className="portfolio-container">
          <img src={coin.coinId.image} alt="" />
          <p>{coin.coinId.name}</p>
          <p>({coin.coinId.symbol})</p>
          <button
            className="delete-button"
            onClick={() => handleDeleteCoin(idx)}
          >
            <svg class="delete-svgIcon" viewBox="0 0 448 512">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className="not-user-container">
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
export default Portfolio
