import { useNavigate } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useState } from 'react'
import { createChat } from '../services/ChatServices'
import CircularProgress from '@mui/material/CircularProgress'

const Chat = ({ user }) => {
  let navigate = useNavigate()
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      const responseData = await createChat(userInput)
      setResponse(responseData)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return user ? (
    <div className="main-chat">
      <h1>CryptoGPT</h1>
      <ul className="feed">
        <li>{isLoading ? <CircularProgress /> : response}</li>
      </ul>
      <div className="bottom-section">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button className="chat-submit" type="submit">
              <TelegramIcon />
            </button>
          </form>
        </div>
      </div>
      <p className="chat-p">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts. ChatGPT May 24 Version
      </p>
    </div>
  ) : (
    <div>
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}></button>
    </div>
  )
}

export default Chat
