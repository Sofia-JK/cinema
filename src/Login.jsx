import { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"
import vk from './assets/vk.svg'
import fb from './assets/facebook.svg'
import gl from './assets/google.svg'
import tw from './assets/twitter.svg'

const Login = () => {
  return (
    <div id="root2">
      <div className='login'>
        <h1>Войти</h1>
        <form>
          <input placeholder='Логин, почта или телефон' />
          <input placeholder='Ваш пароль' />
          <button className='log'>Войти</button>
          <Link to={`/reg`}>
            <button className='reg'>Зарегистрироваться</button>
          </Link>
        </form>
        <Link to={`/passw`}>
          Восстановить пароль
        </Link>
      </div>
      <div className='social'>
        <img src={vk} />
        <img src={fb} />
        <img src={gl} />
        <img  src={tw} />
      </div>
    </div>
  )
}

export default Login