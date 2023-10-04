import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { useState } from 'react'
import { CartProvider } from "./components/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";

function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/:categoria' element={<ItemListContainer />} />
        <Route path='/Item/:id' element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>

    </BrowserRouter>
    </CartProvider>
      </>
  )
}

export default App

