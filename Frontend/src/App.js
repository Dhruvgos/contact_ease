import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import ContactState from './context/ContactContext';
import Signup from './components/Signup';
import About from './components/About';
function App() {
   
    
  return (
    <ContactState>

    <BrowserRouter>
     <div className='sticky-top' data-bs-theme="dark">
      <Navbar/>
     </div>
     <Routes>
     <Route exact path='/' element={< Home />}></Route>
     <Route exact path='/login' element={< Login />}></Route>
     <Route exact path='/signup' element={< Signup />}></Route>
     <Route exact path='/about' element={< About />}></Route>
     </Routes>
    </BrowserRouter>
    </ContactState>
  )
}

export default App
