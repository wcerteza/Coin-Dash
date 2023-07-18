import Markets from '../components/Markets'
import { useNavigate } from 'react-router-dom'

const Search = ({ user }) => {
  let navigate = useNavigate()
  return user ? (
    <div>
      <Markets />
    </div>
  ) : (
    <div className="not-user-container">
      <h3>Please sign in to view Markets</h3>
      <button className="not-user-button" onClick={() => navigate('/signin')}>
        Sign In
      </button>
    </div>
  )
}

export default Search
