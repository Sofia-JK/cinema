import React from 'react'
import './awards.css'
import oscar from '../assets/oscar.svg'

const awards = () => {
  return (
    <div className='awards-page'>
        <img src={oscar} />
        <div>
            <p id="name-a">Оскар</p>
            <p id="about-a">Лучшая мужская роль </p>
            <p id="name-a-eng">2020</p>
        </div>
    </div>
  )
}

export default awards