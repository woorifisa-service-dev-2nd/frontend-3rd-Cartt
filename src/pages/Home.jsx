import React, { useReducer, useState } from 'react'
import ScreenHeader from '@/component/screenPrinted/ScreenHeader'
import ScreenBody from '@/component/screenPrinted/ScreenBody'
import ScreenResult from '@/component/screenPrinted/ScreenResult'
import Button from '@mui/material/Button';

const Home = ({ onClick }) => {

    return (
        <div>
            <ScreenHeader />
            <Button variant="contained" color="success" onClick={onClick} >ADD TO CART</Button>
            <ScreenBody />
            <ScreenResult />

        </div>
    )
}

export default Home