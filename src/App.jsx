import { useState, useReducer } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout'
import { data } from '@/constant/data'
import { ScreenContext, ScreenDispatchContext } from '@/component/context/ScreenContext.jsx'
import { reducer, reducerForSlider, reducerAmount } from '@/component/context/Reducer.jsx'
import Home from './pages/Home'
import Cart from './pages/Cart';


function App() {

    const [viewItem, sliderDispatch] = useReducer(reducerForSlider, data[0]);
    const [items, dispatch] = useReducer(reducer, data);
    const [amount, amountDispatch] = useReducer(reducerAmount, data[0]);

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

                <ScreenContext.Provider value={[items, viewItem, amount]}>
                    <ScreenDispatchContext.Provider value={[dispatch, sliderDispatch, amountDispatch]}>
                        <Routes>
                            <Route path="/" element={<Home onClick={goCart} />} />
                            <Route path="/cart" element={<Cart onClick={goHome} />} />
                        </Routes>
                    </ScreenDispatchContext.Provider>
                </ScreenContext.Provider>

            </DefaultLayout>


        </>
    )
}

export default App