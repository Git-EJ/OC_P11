import logo_footer from '../assets/logo/logo_footer_svg.svg'

const Footer = () => (
  <footer className="footer">
    <div className='footer_wrapper'>
      <div className="footer_logo_container">
        <img src={logo_footer} alt="logo" className="footer_logo_img" />
      </div>
      <div className="footer_text">©️ 2020 Kasa. All rights reserved</div>
    </div>
  </footer>
)

export default Footer;