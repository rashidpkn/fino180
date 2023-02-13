import React, { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Footer from './shared/Footer'
import Navbar from './shared/Navbar'
import ReactGA from 'react-ga'
ReactGA.initialize('G-9BDRRC9RLK')

function App() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [location])
  
  return (
    <Routes>
      <Route path='/' element={<><Navbar /><Outlet /><Footer /></>} >
        <Route index element={<Home />} />
      </Route>
      {/* <Route path='*' element={404} /> */}
    </Routes>
  )
}

export default App