import { useEffect, useState } from 'react'
import { GetCoins } from '../services/CoinServices'
import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
  let navigate = useNavigate()

  const [coins, setCoins] = useState([])

  useEffect(() => {
    const handleCoins = async () => {
      const data = await GetCoins()
      setCoins(data)
    }
    handleCoins()
  }, [])

  return (
    <div class="flip-card">
      {coins.map((coin) => (
        <div class="flip-card-inner" key={coin.id}>
          <div class="flip-card-front">
            <p class="title">{coin.name}</p>
            <img src={coin.image} alt="" />
          </div>
          <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
