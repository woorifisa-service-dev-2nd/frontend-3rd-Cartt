import { useState, useReducer } from 'react'
import DefaultLayout from './layouts/DefaultLayout'
import { data } from '@/defaultitem/data'
import CartContainer from '@/components/carts/CartContainer'
import { CartContext, CartDispatchContext } from './contexts/CartContext';
import { reducer } from "@/contexts/Reducer.jsx";

console.log(data);

function App() {
    const [items, dispatch] = useReducer(reducer, data);

    return (
        <DefaultLayout>
            <CartContext.Provider value={items}>
                <CartDispatchContext.Provider value={dispatch}>
                    <h1 className='text-6xl'>Your Bag</h1>
                    <CartContainer />
                </CartDispatchContext.Provider>
            </CartContext.Provider>
        </DefaultLayout>
    )
}

export default App
