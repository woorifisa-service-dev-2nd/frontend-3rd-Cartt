import React from 'react'
import ProductBody from './productPrinted/ProductBody'
import leftArrow from '@/assets/images/leftArrow.png'
import rightArrow from '@/assets/images/rightArrow.png'
import { ScreenDispatchContext } from '../context/ScreenContext'


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
      <img src={leftArrow} alt="leftArrow" onClick={()=> left()}/>
      <ProductBody />
      <img src={rightArrow} alt="rightArrow" onClick={()=> right()}/>
    </div>
  )
}

export default ScreenBody