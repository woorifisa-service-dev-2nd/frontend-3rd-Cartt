import { useState, useReducer } from 'react'
import { Route, Routes, useNavigate} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout'
import { data } from '@/defaultitem/data'

import { CartContext, CartDispatchContext } from './contexts/CartContext';
import { reducer } from "@/contexts/Reducer.jsx";
import Home from './pages/Home'
import Cart from './pages/Cart';

console.log(data);

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

       <DefaultLayout>

        <CartContext.Provider value={items}>
            <CartDispatchContext.Provider value={dispatch}>
            <Routes>
              <Route path="/" element={<Home onClick={goCart}/>}/>
              <Route path="/cart" element={<Cart onClick={goHome}/>} />
            </Routes>
            </CartDispatchContext.Provider>
        </CartContext.Provider>

    </DefaultLayout>


        </>
    )
}

export default App