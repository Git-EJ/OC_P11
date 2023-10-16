import banner_header from "../assets/img/header_banner.webp"

const HeaderBanner = () => {
  return (
    <div className="header_banner_container">
        <img src= {banner_header} alt="banner" className="header_banner_img"/>
        <p className="header_banner_text">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default HeaderBanner;