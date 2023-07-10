import { SidebarData } from './SidebarData'

const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar
