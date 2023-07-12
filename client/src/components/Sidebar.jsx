import { SidebarData } from './SidebarData'
import LogoutIcon from '@mui/icons-material/Logout'

const Sidebar = ({ handleLogOut }) => {
  const handleLogoutClick = () => {
    handleLogOut()
  }

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="SidebarRow"
              key={key}
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id="SidebarIcon">{val.icon}</div>
              <div id="SidebarTitle">{val.title}</div>
            </li>
          )
        })}
      </ul>
      <div className="logout" onClick={handleLogoutClick}>
        <button>
          <LogoutIcon />
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar
