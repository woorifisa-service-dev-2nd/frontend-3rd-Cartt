import React, { useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';

const CartFooter = () => {

    const items = useContext(CartContext);

    let sum = 0;

    if(items){
        items.map( (item) => {
            sum += Number(item.price) * Number(item.amount);
        });
    }


    const payHandler = () => {
        alert('결제가 완료 되었습니다!');
    }

    return (
        <>
            <div className='flex justify-center justify-between'>
                <div>
                    {sum.toLocaleString()}
                </div>
                <div className=''>
                    <button onClick={payHandler} className='border-solid border-2 border-indigo-600'>
                        결제
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartFooter