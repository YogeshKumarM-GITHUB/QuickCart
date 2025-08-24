import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
import DetailProductPage from './Components/DetailProductPage'
import MainLayout from './Components/MainLayout'
import AdminLayout from './Components/Admin/AdminLayout'
import AddProduct from './Components/Admin/AddProduct'
function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<DetailProductPage />}
          />
        </Route>
        <Route path="/seller" element={<AdminLayout />}>
            <Route path="" element={<AddProduct/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
