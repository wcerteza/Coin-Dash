import { currencyFormat } from '../services/CurrencyService'

const Coin = ({ coin }) => {
  return (
    <>
      <div className="market-container">
        <div className="market-list">
          <img className="market-img" src={coin.image} alt="" />
          <p>{coin.name}</p>
          <p className="market-symbol">({coin.symbol})</p>
        </div>
        <span className="market-span">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          style={{
            color: coin.price_change_percentage_24h < 0 ? 'red' : 'green'
          }}
        >
          {coin.price_change_percentage_24h}
        </span>
      </div>
    </>
  )
}

export default Coin
