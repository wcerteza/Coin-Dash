import { useNavigate } from 'react-router-dom'
import { DeleteCoinFromPortfolio } from '../services/PortfolioServices'

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
      <h1>Your Coins</h1>
      {portfolio.coins.map((coin, idx) => (
        <div key={coin._id}>
          <p>{coin.coinId.name}</p>
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
