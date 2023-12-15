import React from 'react'
import CartContainer from '@/components/carts/CartContainer'
import { AppBar, Toolbar, Typography } from '@mui/material'
const Cart = () => {
    // const items = useContext(ScreenContext);
    // console.log(items);
    return (
        <>
            {/* <h1 className='text-6xl'>Your Bag</h1> */}
            <AppBar position="static" color="info">
                <Toolbar>
                    {/* <CameraIcon className={classes.icon} /> */}
                        <Typography variant="h6"  noWrap>
                            Your Bag
                        </Typography>
                        
                </Toolbar>
            </AppBar>
            <CartContainer />
        </>
    )
}
export default Cart