import React, { useReducer, useState } from 'react'
import ScreenHeader from '@/component/screenPrinted/ScreenHeader'
import ScreenBody from '@/component/screenPrinted/ScreenBody'
import ScreenResult from '@/component/screenPrinted/ScreenResult'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';

const Home = ({ onClick }) => {

    return (
        <Grid >
            <ScreenHeader />
            
            <ScreenBody />
            <ScreenResult />
            <Box  textAlign='center'>
            <Button   variant="contained" color="success" onClick={onClick} >GO TO CART</Button>
            </Box>
        </Grid>
    )
}

export default Home