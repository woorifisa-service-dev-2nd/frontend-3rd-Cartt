import React, { useContext } from 'react'
import { ScreenContext, ScreenDispatchContext } from '../../context/ScreenContext'
import IconButton from '../../ui/IconButton'
import ProductItem from './ProductItem';


const ProductBody = () => {
  const [items, viewItem] = useContext(ScreenContext);
  const [dispatch, sliderDispatch] = useContext(ScreenDispatchContext);

  const id = viewItem.id

  // const viewItem = useContext(ScreenContext[1]);

  return (
    <div>
      <h1>{items[id-1].name}</h1>
      <img src={items[id-1].img} alt={items[id-1].name} />
      <h2>{items[id-1].price}</h2>
      <ProductItem/>
  
      {/* <IconButton icon={'+'} onclick={()=>dispatch( {type: 'inc', id} )}/>
      
      <IconButton icon={'-'} onclick={()=>dispatch( {type: 'dec', id} )} /> */}
    </div>
  )
}

export default ProductBody