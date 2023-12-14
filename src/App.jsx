import React, {useReducer, useState} from 'react'
import ScreenHeader from './component/screenPrinted/ScreenHeader'
import ScreenBody from './component/screenPrinted/ScreenBody'
import ScreenResult from './component/screenPrinted/ScreenResult'
import {data} from '@/constant/data'
import {ScreenContext, ScreenDispatchContext} from '@/component/context/ScreenContext.jsx'

const reducer = () => {

}
// const [state, change] = useState(0);

const reducerForSlider = (viewItem, action) => {


  switch (action.type) {
    case 'right':
      if(viewItem.id === 3){
        return {
          ...viewItem,
          id: 1
        }
      }
      else{
        return {
        ...viewItem,
          id: viewItem.id + 1
        }
      }

    case 'left':
      if(viewItem.id === 1){
        return {
          ...viewItem,
          id: 3
        }
      }
      else{
        return {
        ...viewItem,
          id: viewItem.id - 1
        }
      }
    // default:
    //   return viewItem
    }
}

const reducerAmount = (viewItem, action) => {
  console.log(viewItem);
  console.log(action);
}


const App = () => {

  const [viewItem, sliderDispatch] = React.useReducer(reducerForSlider, data[0]);
  const [items, dispatch] = React.useReducer(reducer, data);
  const [amount, amountDispatch] = React.useReducer(reducerAmount, data[0]);

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