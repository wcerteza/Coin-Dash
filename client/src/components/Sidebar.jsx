import { SidebarData } from './SidebarData'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'

const Sidebar = ({ handleLogOut }) => {
  const handleLogoutClick = () => {
    handleLogOut()
  }

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          console.log(val.link)
          return (
            <Link to={`${val.link}`}>
              <li
                className="SidebarRow"
                key={key}
                // id={window.location.pathname === val.link ? 'active' : ''}
                // onClick={() => {
                //   window.location.pathname = val.link
                // }}
              >
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
