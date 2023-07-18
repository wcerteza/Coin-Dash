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
          <p>{coin.coinId.market_cap_rank}.</p>
          <p>{coin.coinId.name}</p>
          <p>({coin.coinId.symbol})</p>
          <button onClick={() => handleDeleteCoin(idx)}>delete</button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
export default Portfolio
