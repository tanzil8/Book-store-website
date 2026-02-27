import React from 'react'
import Navbar from '../component/Navbar'
import { EmailBanner } from '../component/Banner'
import { BookCard } from '../component/Card'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <EmailBanner/>
      <BookCard/>
      
    </div>
  )
}

export default Home
