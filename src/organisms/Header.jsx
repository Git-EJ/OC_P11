import HeaderNav from "../molecules/HeaderNav.jsx";
import HeaderBanner from "../molecules/HeaderBanner.jsx";

const Header = () => {
  return (
    <header className="header">
      <HeaderNav />
      <HeaderBanner />
    </header>
  )
}

export default Header;