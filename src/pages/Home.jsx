import React from 'react'
import Navbar from '../components/Navbar'
import { EmailBanner } from '../components/Banner'
import Footer from '../components/Footer'
import CartGrid from '../components/cart'







const Home = () => {
  return (
    <div>
      <Navbar/>
      <EmailBanner/>
    <CartGrid/>
      <Footer/>
    </div>
  )
}

export default Home
