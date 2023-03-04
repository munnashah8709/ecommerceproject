import React from 'react'
import Header from '../Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loging from '../Component/Loging'
import AddCart from '../Component/AddCart'
import Payment from '../Component/Payment'




const Rounting = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path="/loging" element={<Loging />} />
          <Route path="/cart" element={<AddCart />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Rounting
