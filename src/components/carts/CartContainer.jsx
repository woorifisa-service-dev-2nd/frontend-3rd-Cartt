import React, {useContext} from 'react'
import CartItem from './CartItem'
import CartFooter from './CartFooter';
import { ScreenContext } from '@/component/context/ScreenContext.jsx'

const CartContainer = () => {

    const items = useContext(ScreenContext)[0];
    // console.log(items.length);

    return (
        <>
            <ul className=''>
                {
                    items.map((item) => {
                        if(item.amount > 0){ // 수량이 1개 이상인 경우만 
                            return <CartItem key={item.id} item={item}/>
                        }
                    })
                }
            </ul>
            <CartFooter/>
        </>
    )
}

export default CartContainer