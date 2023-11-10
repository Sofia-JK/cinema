import React from 'react'
import './next.css'

const next = () => {
  return (
    <div id="root2">
        <div className='next'>
        <h1>Восстановить пароль</h1>
        <form>
            <input placeholder='Придумайте новый пароль' />
            <input placeholder='Подтвердите новый пароль' />
            <button className='reg-1'>Готово!</button>
        </form>
        </div>
    </div>
  )
}

export default next