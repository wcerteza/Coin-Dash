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
    <div>
      <h1 className="portfolio-h1">Your Coins</h1>
      <div className="portfolio-page">
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
    </div>
  ) : (
    <div className="not-user-container">
      <h3>Please sign in to view your Portfolio</h3>
      <button className="not-user-button" onClick={() => navigate('/signin')}>
        <div class="not-user-sign">
          <svg viewBox="0 0 512 512">
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
          </svg>
        </div>

        <div class="not-user-text">Login</div>
      </button>
    </div>
  )
}
export default Portfolio
