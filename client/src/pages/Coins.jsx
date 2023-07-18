import React, { lazy, Suspense, useState, useEffect } from 'react'
const CoinCard = lazy(() => import('../components/CoinCard'))
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'

const Coins = ({ user }) => {
  let navigate = useNavigate()
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const handleCoins = async () => {
      const data = await GetCoins()
      setCoins(data)
    }
    handleCoins()
  }, [])

  return user ? (
    <div className="cardWrapper">
      {coins.map((coin, index) => (
        <Suspense fallback={<div>Loading...</div>} key={index}>
          <div className="coinCardContainer">
            <CoinCard coin={coin} index={index} />
          </div>
        </Suspense>
      ))}
    </div>
  ) : (
    <div className="not-user-container">
      <h3>Please sign in to view Coins</h3>
      <button className="not-user-button" onClick={() => navigate('/signin')}>
        Sign In
      </button>
    </div>
  )
}

export default Coins
