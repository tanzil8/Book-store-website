import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './about/HeroSection'
import StorySection from './about/StorySection'
import FeaturedBooksCarousel from './about/FeaturedBooksCarousel'
import ValuesSection from './about/ValuesSection'
import CTASection from './about/CTASection'
import Footer from '@/components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StorySection/>
      <FeaturedBooksCarousel/>
      <ValuesSection/>
      <CTASection/>
      <Footer/>
      
    </div>
  )
}

export default About
