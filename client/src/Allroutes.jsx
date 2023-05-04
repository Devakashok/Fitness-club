import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Allplans from './components/Allplans/Allplans'
import Joinnow from './components/Joinnow/Joinnow'
const Allroutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/allplans" element={<Allplans/>}/>
        <Route path="/Joinnow" element={<Joinnow/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default Allroutes
