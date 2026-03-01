import React from 'react'
import Navbar from '../component/Navbar'
import { EmailBanner } from '../component/Banner'
import Footer from '../component/Footer'
import CartGrid from '../component/cart'






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
