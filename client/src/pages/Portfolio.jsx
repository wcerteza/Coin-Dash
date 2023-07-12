import { useNavigate } from 'react-router-dom'

const Portfolio = ({ user, portfolio }) => {
  let navigate = useNavigate()

  return user && portfolio ? (
    <div>
      <h1>Your Coins</h1>
      {portfolio.coins.map((coin) => (
        <p>{coin.coinId.name}</p>
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
