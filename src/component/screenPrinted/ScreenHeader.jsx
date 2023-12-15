import React from 'react'
import IconButton from '../ui/IconButton'
import { AppBar, Toolbar, Typography,Button, Box } from '@mui/material';
const ScreenHeader = ({onClick}) => {
  return (
    <div className='flex'>
           <AppBar position="static" color="info">
                <Toolbar>
                    {/* <CameraIcon className={classes.icon} /> */}
                        <Typography variant="h6"  noWrap>
                            Shopping Center
                        </Typography>
                        {/* <Button variant="contained" color="success" onClick={onClick} >GO TO CART</Button> */}
                </Toolbar>
            </AppBar>
            <Box textAlign='center' >
              <Typography variant="h3"  noWrap>
           
            Get Anything, it's all for your health
            </Typography>
            </Box>
            
        {/* <h1>'Get Anything, it's all for your health'</h1> */}
        
    </div>
  )
}
export default ScreenHeader