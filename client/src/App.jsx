import './App.css'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Sidebar from './components/Sidebar'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Coins from './pages/Coins'
import { Route, Routes } from 'react-router'
import Show from './pages/Show'
import Chat from './pages/Chat'
import Portfolio from './pages/Portfolio'
import { getPortfolioByUserId } from './services/PortfolioServices'
import Search from './pages/Search'
import CryptoDetail from './pages/CryptoDetail'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  const [portfolio, setPortfolio] = useState(null)
  const [lookForPortfolio, setLookForPortfolio] = useState(false)
  let navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/signin')
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    setLookForPortfolio(true)
  }

  if (lookForPortfolio) {
    const retrievePortfolio = async () => {
      const port = await getPortfolioByUserId(user.id)
      setPortfolio(port)
      setLookForPortfolio(false)
    }
    retrievePortfolio()
  }

  return (
    <div className="App">
      <Sidebar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coins" element={<Coins user={user} />} />
          <Route
            path="/:coin_id"
            element={<Show user={user} portfolio={portfolio} />}
          />
          <Route path="/chat" element={<Chat user={user} />} />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                user={user}
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                setLookForPortfolio={setLookForPortfolio}
              />
            }
          />
          <Route path="/search" element={<Search user={user} />} />
          <Route path="/search/:id" element={<CryptoDetail user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
