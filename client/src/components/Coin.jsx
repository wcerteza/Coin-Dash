import { useEffect, useState } from 'react'
import { currencyFormat } from '../services/CurrencyService'
import { Link } from 'react-router-dom'

const Coin = ({ coin }) => {
  const [priceChange, setPriceChange] = useState(
    coin.price_change_percentage_24h
  )

  useEffect(() => {
    setPriceChange(coin.price_change_percentage_24h)
  }, [coin.price_change_percentage_24h])

  return (
    <Link className="link-wrapper" to={`/search/${coin.id}`}>
      <div className="market-container">
        <div className="market-list">
          <img className="market-img" src={coin.image} alt="" />
          <p>{coin.name}</p>
          <p className="market-symbol">({coin.symbol})</p>
        </div>
        <span className="market-span">
          {currencyFormat(coin.current_price)}
        </span>
        <span style={{ color: priceChange < 0 ? 'red' : 'green' }}>
          {priceChange}
        </span>
      </div>
    </Link>
  )
}

export default Coin
