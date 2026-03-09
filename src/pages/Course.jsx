import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'

const Course = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <CourseCard/>
      <Footer/>
    </div>
  )
}

export default Course
