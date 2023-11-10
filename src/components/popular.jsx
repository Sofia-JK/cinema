import React from 'react'
import joker from '../assets/joker.svg'

const popular = () => {
  return (
    <>
        <div className='film'>
            <div>
              <img id='film' src={joker} />
              <p>8.50</p>
            </div>
            <p className='name'>Джокер</p>
            <p className='genre'>Триллер, драма, криминал</p>
        </div>
    </>
  )
}

export default popular