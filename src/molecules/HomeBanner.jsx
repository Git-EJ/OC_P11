import banner_header from "../assets/img/header_banner.jpg"

const HomeBanner = () => {
  return (
    <figure className="home_banner_container">
        <img src= {banner_header} alt="banner" className="home_banner_img"/>
        <p className="home_banner_text">Chez vous, partout et ailleurs</p>
    </figure>
  )
}

export default HomeBanner;