import { useNavigate } from 'react-router-dom'

const Portfolio = ({ user }) => {
  let navigate = useNavigate()
  return user ? (
    <div>portfolio</div>
  ) : (
    <div>
      <h3>Please sign in to view Coins</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}
export default Portfolio
