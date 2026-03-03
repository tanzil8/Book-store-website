import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { EmailBanner } from '../components/Banner.jsx'
import CartGrid from '../components/cart.jsx'
import Footer from '../components/Footer.jsx'








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
