import Footer from "../organisms/Footer.jsx"
import Cards from "../organisms/Cards.jsx"
import Header from "../organisms/Header.jsx"
import HomeBanner from "../molecules/HomeBanner.jsx"

const Home = () => {
  return (
    <>
      <Header />
      <main className="home_wrapper">
        <HomeBanner />
        <div className="cards_wrapper">
          <Cards />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home