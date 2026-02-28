import React from 'react'
import Navbar from '../component/Navbar'
import { EmailBanner } from '../component/Banner'
import { FeaturedBooks } from '../component/featured-books'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <EmailBanner/>
   
      <FeaturedBooks/>
    </div>
  )
}

export default Home
