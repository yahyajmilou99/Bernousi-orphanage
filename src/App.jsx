
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Programs from './pages/programs/Programs'
import Donate from './pages/donate/Donate'
import Contact from './pages/contact/Contact'
import { ContextProvider } from './utils/ContextProvider'
import { useEffect } from 'react'

function App() {


    const pathName = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathName])

  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/supportUs' element={<Donate />} />
          <Route path='/contactUs' element={<Contact />} />
        </Routes>
      </ContextProvider>
    </>
  )
}

export default App
