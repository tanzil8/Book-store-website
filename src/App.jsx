import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Course from "./pages/Course"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Course/>}/>
   
   </Routes>
   </BrowserRouter>
  )
}

export default App
