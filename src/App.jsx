import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Landing from "./components/Landing/Landing"
import About from "./components/About/About"
import Marquee from "./components/Mrquee/Marquee"



function App() {


  return (
    <>
    <Nav/>
    <Landing/>
    <Marquee/>
    <About/>
    <Routes>
      <Route path={'/'} element={""}></Route>
    </Routes>
   
    </>
  )
}

export default App
