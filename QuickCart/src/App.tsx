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
import ProductList from './Components/Admin/ProductList'
import AdminOrders from './Components/Admin/AdminOrders'
function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/sign-in' element={<Home/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<DetailProductPage />}
          />
        </Route>
        <Route path="/seller" element={<AdminLayout />}>
            <Route path="addproduct" element={<AddProduct/>} />
            <Route path="productlist" element={<ProductList/>}/>
            <Route path="adminorders" element={<AdminOrders/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
