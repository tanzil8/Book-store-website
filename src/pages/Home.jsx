import React from 'react'
import Navbar from '../components/Navbar'
import { EmailBanner } from '../components/Banner'
import CartGrid from '../components/cart'
import Footer from '../components/Footer'








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
