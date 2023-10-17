import logo_footer from '../assets/logo/logo_footer_svg.svg'

const Footer = () => (
  <footer className="footer_container">
    <div className="footer_logo_container">
      <img src={logo_footer} alt="logo" className="footer_logo_img" />
    </div>
    <div className="footer_text">©️ 2020 Kasa. All rights reserved</div>
  </footer>
)

export default Footer;