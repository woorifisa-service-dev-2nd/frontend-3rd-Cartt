import React from 'react'

const IconButton = ({icon, onclick}) => {
  return (
    <div>
        <button onClick={onclick}>
            {icon}
        </button>
    </div>
  )
}

export default IconButton