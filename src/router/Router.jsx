import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import About from "../pages/About"
import Accommodation from "../pages/Accommodation"

const Router = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/error/:errorCode" element = {<Error/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/accommodation/:id" element = {<Accommodation/>} />
        <Route path = "*" element = {<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router