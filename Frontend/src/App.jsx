import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import Captainlogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/captain-login' element={<Captainlogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
      
  </Routes>
    </div>
  )
}

export default App
