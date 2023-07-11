import './App.css'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Coins from './pages/Coins'
import { Route, Routes } from 'react-router'
import Show from './pages/Show'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  return (
    <div className="App">
      <Sidebar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/:coin_id" element={<Show />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
