import React from 'react'
import './cassa.css'
import cass from '../assets/cassa.svg'

const cassa = () => {
  return (
    <>
        <div className='cassa-film'>
            <img src={cass} />
            <div>
                <p id="cassa-name">1. Бладшот</p>
                <p id="cassa-money">$13 млн</p>
                <p id="cassa-money1">$15.1 млн за 4 недели</p>
            </div>
        </div>
    </>
  )
}

export default cassa