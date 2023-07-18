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
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ul className="feed">
            <li className="feed-li">{response}</li>
          </ul>
        </>
      )}
      <div className="bottom-section">
        <div className="input-container">
          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-input"
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
    <div className="not-user-container">
      <h3>Please sign in to view AI-chatbot</h3>
      <button className="not-user-button" onClick={() => navigate('/signin')}>
        <div class="not-user-sign">
          <svg viewBox="0 0 512 512">
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
          </svg>
        </div>

        <div class="not-user-text">Login</div>
      </button>
    </div>
  )
}

export default Chat
