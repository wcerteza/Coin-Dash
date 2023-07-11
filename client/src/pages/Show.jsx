import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCoinDetail } from '../services/CoinServices'

const Show = () => {
  const [coinDetails, setCoinDetails] = useState()
  let { coin_id } = useParams()
  console.log(coin_id)
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

  return (
    <div>
      {coinDetails && (
        <>
          <div>{coinDetails.name}</div>
          <p>{coinDetails.symbol}</p>
          <img src={coinDetails.image} alt="coin-logo" />
          <p>Current Price: ${coinDetails.current_price}</p>
          <p>Total Volume: {coinDetails.total_volume}</p>
          <p>Rank: {coinDetails.market_cap_rank}</p>
        </>
      )}
    </div>
  )
}
export default Show
