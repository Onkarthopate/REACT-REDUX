import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import Navbar from './Navbar'
import AddToCart from './AddToCart'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/addToCart' element={<AddToCart />} />
      </Routes>
    </Router>

  )
}

export default App
