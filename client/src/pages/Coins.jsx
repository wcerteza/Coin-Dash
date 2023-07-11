import React, { lazy, Suspense, useState, useEffect } from 'react'
const CoinCard = lazy(() => import('../components/CoinCard'))
import { GetCoins } from '../services/CoinServices'

const Coins = () => {
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
    <div className="cardWrapper">
      {coins.map((coin, index) => (
        <Suspense fallback={<div>Loading...</div>}>
          <div key={index}>
            <CoinCard
              coin={coin}
              index={index}
              handleCardHover={handleCardHover}
            />
          </div>
        </Suspense>
      ))}
    </div>
  )
}

export default Coins
