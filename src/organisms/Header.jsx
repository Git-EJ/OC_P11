import HeaderNav from "../molecules/Header_nav.jsx";
import HeaderBanner from "../molecules/Header_banner.jsx";

const Header = () => {
  return (
    <header className="header">
      <HeaderNav />
      <HeaderBanner />
    </header>
  )
}

export default Header;