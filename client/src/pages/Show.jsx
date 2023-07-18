import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCoinDetail } from '../services/CoinServices'
import axios from 'axios'
import { currencyFormat } from '../services/CurrencyService'
import { useNavigate } from 'react-router-dom'

const Show = ({ user, portfolio }) => {
  const [coinDetails, setCoinDetails] = useState()
  let { coin_id } = useParams()
  let navigate = useNavigate()

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
    navigate('/portfolio')
  }

  return (
    <div>
      <h1 className="show-title">
        More About <span className="show-title-span">{coinDetails?.name}</span>
      </h1>
      {coinDetails && (
        <div className="show-wrapper">
          <div className="show-container">
            <div className="show-name">{coinDetails.name}</div>
            <p className="show-symbol">({coinDetails.symbol})</p>
            <img src={coinDetails.image} alt="coin-logo" />
            <p>
              <span className="show-span">Current Price: </span>
              {currencyFormat(coinDetails.current_price)}
            </p>
            <p>
              <span className="show-span">Total Volume: </span>
              {coinDetails.total_volume}
            </p>
            <p>
              <span className="show-span">
                Rank: {coinDetails.market_cap_rank}
              </span>
            </p>
            <button className="learn-more" onClick={() => AddCoinToPortfolio()}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Add to Portfolio</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Show
