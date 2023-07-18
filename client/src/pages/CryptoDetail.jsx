import Chart from '../components/Chart'
import CoinDetail from '../components/CoinDetail'
import { useNavigate } from 'react-router-dom'

const CryptoDetail = ({ user }) => {
  let navigate = useNavigate()

  return user ? (
    <div className="crypto-detail-wrapper">
      <Chart />
      <CoinDetail />
    </div>
  ) : (
    <div className="not-user-container">
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CryptoDetail
