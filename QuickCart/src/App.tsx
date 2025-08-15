
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
function App() {
  return (
    <div  className='container mx-auto max-w-screen-xl'>
      <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
