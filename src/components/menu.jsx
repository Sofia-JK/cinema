import React from 'react'
import './menu.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div className='head'>
    <img src={logo} />
    <ul id="main-menu">
        <li><a>Афиша</a></li>
        <li><a>Медиа</a></li>
        <li><a>Фильмы</a></li>
        <li><a>Актёры</a></li>
        <li><a>Новости</a></li>
        <li><a>Подборки</a></li>
        <li><a>Категории</a></li>
    </ul>
    <div className='buttons'>
      <button className='search'>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M11.1087 11.1087L16 16M12.7391 6.86957C12.7391 10.1112 10.1112 12.7391 6.86957 12.7391C3.62789 12.7391 1 10.1112 1 6.86957C1 3.62789 3.62789 1 6.86957 1C10.1112 1 12.7391 3.62789 12.7391 6.86957Z" stroke="#3657CB" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      </button>
      <Link to={'/log'}><button className='in'>Войти</button></Link>
    </div>
  </div>
  )
}

export default menu