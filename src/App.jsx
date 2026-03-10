import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"


const App = () => {
  return (
  
   <Routes>
  
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Course/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Signin/>}/>
 
   </Routes>
  
  )
}

export default App
