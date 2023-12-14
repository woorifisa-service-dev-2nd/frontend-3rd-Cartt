import React from 'react'
import IconButton from '../../ui/IconButton'
import { SCREEN_ICON } from '../../../constant/ScreenIcon'

const ProductCount = () => {
  return (
    <div>
        <IconButton icon={'➕'} />
        <IconButton icon={'➖'} />
    </div>
  )
}

export default ProductCount