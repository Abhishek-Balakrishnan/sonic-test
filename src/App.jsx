import React from 'react'
import Display from './components/Display'
import Header from './components/Header'
import Footer from './components/Footer'
import View from './components/View'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          {/* path setting for restourent list */}
          <Route path='/' element={<Display />} />
          {/* path setting for view rest */}
          <Route path='/view/:id' element={<View/>} />
        
        </Routes>
        <Footer />
      </Router>
  )
}

export default App