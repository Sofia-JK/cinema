import React from 'react'
import { Link } from "react-router-dom"
import './passw.css'

const passw = () => {
  return (
    <div id="root2">
    <div className='passw'>
        <h1>Восстановить пароль</h1>
        <form>
          <input placeholder='Почта или номер телефона' />
          <div className='code'>
            <button className='send'>Отправить</button>
            <input placeholder='Полученный код' />
          </div>
          <Link to={`/next`}>
            <button className='reg-1'>Далее</button>
          </Link>
        </form>
        </div>
    </div>
  )
}

export default passw