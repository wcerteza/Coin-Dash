import { useEffect, useState } from 'react'
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'

const CoinCard = ({ user }) => {
  let navigate = useNavigate()

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const handleCoins = async () => {
      const data = await GetCoins()
      setCoins(data)
    }
    handleCoins()
  }, [])

  const handleCardHover = (index) => {
    const updatedCoins = [...coins]
    updatedCoins[index].isHovered = !updatedCoins[index].isHovered
    setCoins(updatedCoins)
  }

  return (
    <div className="coin-card">
      {coins.map((coin, index) => (
        <div
          className={`flip-card-inner ${coin.isHovered ? 'hover' : ''}`}
          key={coin.id}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardHover(index)}
        >
          <div className="flip-card-front">
            <p className="title">{coin.name}</p>
            <img src={coin.image} alt="" />
          </div>
          <div className="flip-card-back">
            <p className="title">Price: ${coin.current_price}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
            <p>Volume: {coin.total_volume}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoinCard
