import React from 'react'
import './addcom.css'
import avatar1 from '../assets/avatar-add.svg'


const addcomm = () => {
  return (
    <>
        <div className='add-comm-container'>
            <div className='add-comm-head'>
                <img src={avatar1} />
                <div>
                    <p id="bold-p">Евгений Батиков</p>
                    <p id="normal-p">Мой профиль</p>
                </div>
            </div>
            <form className='add-comm-form'>
                <div className='add-comm-header'>
                    <input type='text' className='enter-head' placeholder='Заголовок Вашей рецензии' />
                    <select>
                        <option selected>Положительная рецензия</option>
                        <option>Нейтральная рецензия</option>
                        <option>Отрицательная рецензия</option>
                    </select>
                </div>
                <div className='types-p'>
                    <p id="bold-type">Ж</p>
                    <p id="cursive-type">К</p>
                    <p id="under-type">А</p>
                </div>
                <textarea className='comment-text-inside' placeholder='Я думаю, фильм будет отличный, так как это актёр из Гарри Поттера'></textarea>
                <div className='check-and-buttons'>
                    <p><input className="check" type="checkbox" id='ok' /><span id='no'>Соглашаюсь на</span> <span>правила публикации рецензии</span></p>
                    <div>
                        <button className='preview'>Предварительный просмотр </button>
                        <button className='send-comm'>Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default addcomm