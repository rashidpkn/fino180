import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Navbar /><Outlet /><Footer /></>} >
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={404} />
    </Routes>
  )
}

export default App