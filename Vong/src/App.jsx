import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Categories from './components/Categories/Categories'
import Map from './components/Map/Map'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'
import Karta from './components/Base/Karta/Karta'

function App() {

  return (
    <div className="page">
          <Header/>
          <Hero/>
          <Categories/>
          <Info/>
          <Map/>
          <Karta/>
          <Footer/>
    </div>
  )
}

export default App
