import React from 'react'
import Navbar from '../component/Navbar'
import { EmailBanner } from '../component/Banner'
import CardPage from '../component/Card'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <EmailBanner/>
    <CardPage/>
      
    </div>
  )
}

export default Home
