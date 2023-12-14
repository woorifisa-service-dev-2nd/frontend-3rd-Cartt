import React, {useReducer, useState} from 'react'
import ScreenHeader from './component/screenPrinted/ScreenHeader'
import ScreenBody from './component/screenPrinted/ScreenBody'
import ScreenResult from './component/screenPrinted/ScreenResult'
import {data} from '@/constant/data'
import {ScreenContext, ScreenDispatchContext} from '@/component/context/ScreenContext.jsx'
import {reducer, reducerForSlider, reducerAmount} from '@/component/context/Reducer.jsx'



const App = () => {

  const [viewItem, sliderDispatch] = useReducer(reducerForSlider, data[0]);
  const [items, dispatch] = useReducer(reducer, data);
  const [amount, amountDispatch] = useReducer(reducerAmount, data[0]);

  return (
    <div>
      <ScreenHeader />
      <ScreenContext.Provider  value={[items, viewItem, amount]}>
        <ScreenDispatchContext.Provider value={[dispatch, sliderDispatch, amountDispatch]}>
          <ScreenBody />
          <ScreenResult />
        </ScreenDispatchContext.Provider>
      </ScreenContext.Provider>

    </div>
  )
}

export default App