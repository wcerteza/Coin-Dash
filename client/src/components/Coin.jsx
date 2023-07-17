import { currencyFormat } from '../services/CurrencyService'

const Coin = ({ coin }) => {
  return (
    <>
      <div className="market-container">
        <div className="market-list">
          <img className="market-img" src={coin.image} alt="" />
          <p>{coin.name}</p>
        </div>
        <span className="market-span">
          {currencyFormat(coin.current_price)}
        </span>
      </div>
    </>
  )
}

export default Coin
