import { useNavigate } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useState } from 'react'
import { createChat } from '../services/ChatServices'

const Chat = ({ user }) => {
  let navigate = useNavigate()
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const responseData = await createChat(userInput)
      setResponse(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  return user ? (
    <div className="main-chat">
      <h1>CryptoGPT</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit">
              <TelegramIcon />
            </button>
          </form>
        </div>
        {response}
      </div>
    </div>
  ) : (
    <div>
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}></button>
    </div>
  )
}

export default Chat
