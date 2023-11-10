import React from 'react'
import './registr.css'

const registr = () => {
  return (
    <div id="root2">
        <div className='registr'>
        <h1>Зарегистрироваться</h1>
        <form id="reg">
          <input placeholder='Имя' />
          <input placeholder='Фамилия' />
          <input placeholder='Придумайте логин' />
          <input placeholder='Придумайте пароль' />
          <input placeholder='Повторите пароль' />
          <input placeholder='Номер телефона или e-mail' />
          <p><input className="check" type="checkbox" id='ok' /><span id='no'>Соглашаюсь на условия</span> <span>политики конфиденциальности</span></p>
          <p><input className="check" type="checkbox" id='ok'/>Соглашаюсь на обработку персональных данных</p>
          <button className='reg-1'>Зарегистрироваться</button>
        </form>
        </div>
    </div>
  )
}

export default registr