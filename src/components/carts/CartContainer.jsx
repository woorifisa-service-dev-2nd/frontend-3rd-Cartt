import React, {useContext} from 'react'
import CartItem from './CartItem'
import CartFooter from './CartFooter';
import { ScreenContext } from '@/component/context/ScreenContext.jsx'
import { Grid } from '@mui/material';

const CartContainer = () => {

    const items = useContext(ScreenContext)[0];
    // console.log(items.length);

    return (
        <>
        <Grid container direction="row-reverse" justifyContent="center">
           <Grid  container xs={12}   
                direction="row-reverse"
                justifyContent="center"
                alignItems="center" >
                {
                    items.map((item) => {
                        if(item.amount > 0){ // 수량이 1개 이상인 경우만 
                            return <CartItem key={item.id} item={item}/>
                        }
                    })
                }
            
            </Grid>
            <CartFooter/>
        </Grid>
            
        </>
    )
}

export default CartContainer