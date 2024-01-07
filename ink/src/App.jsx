
import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Cards from './components/cards/Cards'
import Banner from './components/Banner/Banner'
import Team from './components/Team/Team'
import Footer from './components/footer/Footer'
 

//git config --global user.email "user@example.com"
//commit feature

export default function App() {

  return (
    <div>
    <Header/>
    <Hero/>
    <Cards/>
    <Banner/>
    <Team/>
    <Footer/>
    </div>
  )
}


