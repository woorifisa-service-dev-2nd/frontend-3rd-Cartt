import React from 'react'
import CartContainer from '@/components/carts/CartContainer'

const Cart = () => {

    // const items = useContext(ScreenContext);
    // console.log(items);

    return (
        <>
            <h1 className='text-6xl'>Your Bag</h1>
            <CartContainer />

        </>

    )
}

export default Cart