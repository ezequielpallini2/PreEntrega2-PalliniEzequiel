import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
      </>
  )
}

export default App

