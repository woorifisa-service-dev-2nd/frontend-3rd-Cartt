import React from 'react'
import ProductBody from './productPrinted/ProductBody'
import leftArrow from '@/assets/images/leftArrow.png'
import rightArrow from '@/assets/images/rightArrow.png'
import { ScreenDispatchContext } from '../context/ScreenContext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { SvgIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';


const ScreenBody = () => {


  const [dispatch, sliderDispatch] = React.useContext(ScreenDispatchContext);

  const right = () => {
    sliderDispatch({
      type: 'right'
    })
  }

  const left = () => {
    sliderDispatch({
      type: 'left'
    })
  }

  return (
    <div className='flex'>
      {/* <SvgIcon component="NavigateBeforeIcon"></SvgIcon> */}
      <NavigateBeforeIcon sx={{ fontSize: '200px' }} onClick={()=> left() }/>
      {/* <img src={leftArrow} alt="leftArrow" onClick={()=> left()}/> */}
      <ProductBody />

      <NavigateNextIcon sx={{ fontSize: '200px' }} onClick={()=> right()}/>
      {/* <img src={rightArrow} alt="rightArrow" onClick={()=> right()}/> */}
    </div>
  )
}

export default ScreenBody