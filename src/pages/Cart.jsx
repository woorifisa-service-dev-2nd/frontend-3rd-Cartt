import React from 'react'
import CartContainer from '@/components/carts/CartContainer'
import DefaultLayout from '../layouts/DefaultLayout'
import { CartContext,CartDispatchContext } from '../contexts/CartContext'


const Cart = () => {
  return (
    <>
        <h1 className='text-6xl'>Your Bag</h1>
        <CartContainer />
    
    </>

  )
}

export default Cart