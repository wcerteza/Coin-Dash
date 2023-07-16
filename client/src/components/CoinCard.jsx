import { useEffect, useState } from 'react'
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin }) => {
  return (
    <Link to={`/${coin._id}`} className="coin-link">
      <div className="coin-container">
        <div className="coin-card">
          <div className="flip-card-inner" key={coin.id}>
            <div className="flip-card-front">
              <p className="coin-title">{coin.name}</p>
              <img src={coin.image} alt="crypto" className="coin-img" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CoinCard
