import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCoinDetail } from '../services/CoinServices'
import { AddCoinToPortfolio } from '../services/PortfolioServices'
import axios from 'axios'

const Show = ({ user, portfolio }) => {
  const [coinDetails, setCoinDetails] = useState()
  let { coin_id } = useParams()

  useEffect(() => {
    const getCoinDetails = async () => {
      try {
        const coin = await GetCoinDetail(coin_id)
        setCoinDetails(coin)
      } catch (error) {
        throw error
      }
    }
    getCoinDetails()
  }, [coin_id])

  const AddCoinToPortfolio = async () => {
    const payload = {
      coinId: coin_id,
      userId: user.id
    }
    axios.put(`http://localhost:3001/portfolio/${portfolio._id}/`, payload)
  }

  return (
    <div>
      {coinDetails && (
        <div className="show-container">
          <div>{coinDetails.name}</div>
          <p>{coinDetails.symbol}</p>
          <img src={coinDetails.image} alt="coin-logo" />
          <p>Current Price: ${coinDetails.current_price}</p>
          <p>Total Volume: {coinDetails.total_volume}</p>
          <p>Rank: {coinDetails.market_cap_rank}</p>
          <button onClick={() => AddCoinToPortfolio()}>add</button>
        </div>
      )}
    </div>
  )
}
export default Show
