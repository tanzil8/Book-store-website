import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { EmailBanner } from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/BookCart.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <EmailBanner/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home