import React from 'react'
import actor from '../assets/actor.svg'
import './actors.css'

const actors = () => {
  return (
    <div className='actors-page'>
        <img src={actor} />
        <p id="name-a">Ратидзо Мамбо</p>
        <p id="name-a-eng">Ratidzo Mambo</p>
        <p id="about-a">Женщина</p>
    </div>
  )
}

export default actors