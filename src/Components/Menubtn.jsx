import React from 'react'

const Menubtn = ({onClick}) => {
  return (
    <button onClick={onClick} className='Menubtn'>
        <i class="fa-solid fa-bars"></i>
    </button>
  )
}

export default Menubtn;