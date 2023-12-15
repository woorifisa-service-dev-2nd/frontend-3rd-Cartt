import React, { useState, useContext } from 'react'
import IconButton from '../ui/buttons/IconButton';
import incIcon from "@/assets/image/icon-up.png";
import decIcon from "@/assets/image/icon-down.png";
import { ScreenDispatchContext } from '@/component/context/ScreenContext.jsx'
import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { AspectRatio } from '@mui/icons-material';


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
        
            <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
             width: 300,
            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
        
      <CardContent>
            <CardMedia
                sx={{ height: 300 }}
                image={item.img}
            />
        <Typography level="title-lg" id="card-description">
            {item.name}
        </Typography>
        <Typography level="title-lg" id="card-description">
            {item.amount}
        </Typography>
        <Typography level="title-lg" id="card-description">
            {item.price}
        </Typography>
        <Button icon={incIcon} sx={{ fontSize: '30px' }} onClick={() => increaseHandler()} >+</Button>
        <Button icon={decIcon} sx={{ fontSize: '30px' }} onClick={() => decreaseHandler()} >-</Button>
      </CardContent>
    </Card>

      
    )
}

export default CartItem