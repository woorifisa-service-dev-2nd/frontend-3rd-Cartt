import { useState, useReducer } from 'react'
import { Route, Routes, useNavigate} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout'
import { data } from '@/defaultitem/data'
import CartContainer from '@/components/carts/CartContainer'
import { CartContext, CartDispatchContext } from './contexts/CartContext';
import { reducer } from "@/contexts/Reducer.jsx";


function App() {
    const [items, dispatch] = useReducer(reducer, data);
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/');
    }
    const goCart = () => {
      navigate('/cart');
    }

    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
        <DefaultLayout>
            <CartContext.Provider value={items}>
                <CartDispatchContext.Provider value={dispatch}>
                    <h1 className='text-6xl'>Your Bag</h1>
                    <CartContainer />
                </CartDispatchContext.Provider>
            </CartContext.Provider>
        </DefaultLayout>

        </>
    )
}

export default App
