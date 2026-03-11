import Navbar from '@/components/Navbar'
import React from 'react'
import HeroSection from './about/HeroSection'
import StorySection from './about/StorySection'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StorySection/>
    </div>
  )
}

export default About
