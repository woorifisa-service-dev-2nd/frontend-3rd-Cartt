import React from 'react'
import Button from '@mui/material/Button';

const Home = ({onClick}) => {

    
  return (
    

    <div>
        <div>Home</div>
       
        <Button variant="contained" color="success" onClick={onClick} >ADD TO CART</Button>
       
    </div>
    

  )
}

export default Home
