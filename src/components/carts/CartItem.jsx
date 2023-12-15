import React, { useState, useContext } from 'react'
import IconButton from '../ui/buttons/IconButton';
import incIcon from "@/assets/image/icon-up.png";
import decIcon from "@/assets/image/icon-down.png";
import { ScreenDispatchContext } from '@/component/context/ScreenContext.jsx'

const CartItem = ({ item }) => {
    console.log(item.id);

    const id = item.id;
    // const incIcon1 = incIcon;
    // const decIcon1 = decIcon;

    const dispatch = useContext(ScreenDispatchContext)[0];
    // console.log(dispatch);

    const increaseHandler = () => {

        dispatch({ type: 'inc', id})
    }

    const decreaseHandler = () => {

        dispatch({ type: 'dec', id})
    }


    return (
        <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-slate-300 rounded-md shadow-xl">
            <div>
                <img src={item.img} alt="이미지 입니다." />
            </div>
            <div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price.toLocaleString()}\</p>
                </div>
            </div>
            <div>
                {/* increase amount */}
                <IconButton icon={incIcon} onClick={() => increaseHandler()} />
                {/* amount */}
                <p className='amount text-center'>{item.amount}</p>
                {/* decrease amount */}
                <IconButton icon={decIcon} onClick={() => decreaseHandler()} />
            </div>
        </li>
    )
}

export default CartItem