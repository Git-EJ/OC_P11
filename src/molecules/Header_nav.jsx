import logo_header from '../assets/logo/logo_header_webp.webp'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <header className="header">
      <div className="header_logo_container">
        <img src= {logo_header} alt="logo" className="header_logo_img" />
      </div>

      <div className="header_nav_container">
        <NavLink exact to = "/" className="header_nav_link" activeClassName="header_nav_link--active"> Accueil </NavLink>
        <NavLink to = "/about" className="header_nav_link" activeClassName="header_nav_link--active"> A propos </NavLink>
      </div>
    </header>
  )
}

export default HeaderNav