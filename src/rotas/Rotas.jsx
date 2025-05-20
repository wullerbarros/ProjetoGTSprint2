import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageCarrinho from '../pages/PageCarrinho'
import Layout from '../components/Layout'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='carrinho' element={<PageCarrinho />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas