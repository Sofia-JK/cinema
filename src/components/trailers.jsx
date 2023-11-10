import React from 'react'
import './trailers.css'
import mulan from '../assets/mulan.svg'

const trailers = () => {
  return (
    <>
        <div className='trailer-container'>
            <img src={mulan} />
            <p>Мулан</p>
        </div>
    </>
  )
}

export default trailers