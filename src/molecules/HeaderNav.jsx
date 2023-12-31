import logo_header from '../assets/logo/logo_header_svg.svg'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <header className="header_logo_nav">
      <div className="header_logo_container">
        <img src= {logo_header} alt="logo" className="header_logo_img" />
      </div>

      <nav className="header_nav_container">
        <NavLink exact="true" to = "/" className="header_nav_link" activeclassname="header_nav_link--active"> Accueil </NavLink>
        <NavLink to = "/about" className="header_nav_link" activeclassname="header_nav_link--active"> A Propos </NavLink>
      </nav>
    </header>
  )
}

export default HeaderNav;