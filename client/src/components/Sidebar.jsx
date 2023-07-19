import { SidebarData } from './SidebarData'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ handleLogOut }) => {
  let navigate = useNavigate()
  const handleLogoutClick = () => {
    handleLogOut()
    navigate('/signin')
  }

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <Link to={`${val.link}`}>
              <li className="SidebarRow" key={key}>
                <div id="SidebarIcon">{val.icon}</div>
                <div id="SidebarTitle">{val.title}</div>
              </li>
            </Link>
          )
        })}
      </ul>
      <div onClick={handleLogoutClick}>
        <button className="logout">
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar
