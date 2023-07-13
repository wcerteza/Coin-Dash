import { useNavigate } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram'

const Chat = ({ user }) => {
  let navigate = useNavigate()

  return user ? (
    <div className="main-chat">
      <h1>CryptoGPT</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <input type="text" />
          <button type="submit">
            <TelegramIcon />
          </button>
        </div>
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
