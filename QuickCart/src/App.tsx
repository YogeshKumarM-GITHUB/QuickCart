
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import Shop from './Pages/Shop'

function App() {
  return (
    <div  className='container mx-auto max-w-screen-xl'>
      <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
