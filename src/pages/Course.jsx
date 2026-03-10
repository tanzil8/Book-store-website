import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'



const Course = () => {

 
  return (
    <div>
    <Navbar/>
    <div className='min-h-screen'>
      <CourseCard/>
    </div>
      <Footer/>
      </div>
  )
}

export default Course
