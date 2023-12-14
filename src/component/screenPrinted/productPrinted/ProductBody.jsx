import React, { useContext } from 'react'
import { ScreenContext, ScreenDispatchContext } from '../../context/ScreenContext'
import IconButton from '../../ui/IconButton'

const ProductBody = () => {
  const [items, viewItem, amount] = useContext(ScreenContext);
  const [dispatch, sliderDispatch, amountDispatch] = useContext(ScreenDispatchContext);

  const id = viewItem.id

  // const viewItem = useContext(ScreenContext[1]);

  return (
    <div>
      <h1>{items[id-1].name}</h1>
      <img src={items[id-1].img} alt={items[id-1].name} />
      <h2>{items[id-1].price}</h2>
      <IconButton icon={'+'} onclick={()=>amountDispatch( {type: 'inc', viewItem} )}/>
      <IconButton icon={'-'} onclick={()=>amountDispatch( {type: 'dec', viewItem} )} />
    </div>
  )
}

export default ProductBody