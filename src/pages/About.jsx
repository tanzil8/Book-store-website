import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './about/HeroSection'
import StorySection from './about/StorySection'
import FeaturedBooksCarousel from './about/FeaturedBooksCarousel'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StorySection/>
      <FeaturedBooksCarousel/>
    </div>
  )
}

export default About
