import { useEffect, useState } from 'react'
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin, index, handleCardHover }) => {
  let navigate = useNavigate()

  return (
    <div className="coin-container">
      <div className="coin-card">
        <div
          className={`flip-card-inner ${coin.isHovered ? 'hover' : ''}`}
          key={coin.id}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardHover(index)}
        >
          <div className="flip-card-front">
            <p className="coin-title">{coin.name}</p>
            <img src={coin.image} alt="" />
          </div>
          <div className="flip-card-back">
            <div>
              <Link to={`/${coin._id}`}>
                <p>View Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinCard
