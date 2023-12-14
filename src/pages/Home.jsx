import React, {useReducer, useState} from 'react'
import ScreenHeader from '@/component/screenPrinted/ScreenHeader'
import ScreenBody from '@/component/screenPrinted/ScreenBody'
import ScreenResult from '@/component/screenPrinted/ScreenResult'
import {data} from '@/constant/data'
import {ScreenContext, ScreenDispatchContext} from '@/component/context/ScreenContext.jsx'
import {reducer, reducerForSlider} from '@/component/context/Reducer.jsx'
import Button from '@mui/material/Button';




const Home = ({onClick}) => {

  const [viewItem, sliderDispatch] = useReducer(reducerForSlider, data[0]);
  const [items, dispatch] = useReducer(reducer, data);

  return (
    <div>
      <Button variant="contained" color="success" onClick={onClick} >ADD TO CART</Button>
      <ScreenHeader />
      <ScreenContext.Provider  value={[items, viewItem]}>
        <ScreenDispatchContext.Provider value={[dispatch, sliderDispatch]}>
          <ScreenBody />
          <ScreenResult />
        </ScreenDispatchContext.Provider>
      </ScreenContext.Provider>

    </div>
  )
}

export default Home