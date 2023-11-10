import { useState } from 'react'
import Menu from './components/menu'
import './App.css'
import Submenu from './components/submenu'
import Films from './components/films'
import faf from './assets/faf.svg'
import like from './assets/like.svg'
import joker from './assets/joker.svg'
import left from './assets/arrow.svg'
import actor1 from './assets/actor1.svg'
import actor2 from './assets/actor2.svg'
import news1 from './assets/news1.svg'
import eye from './assets/eye.svg'
import comm from './assets/comment.svg'
import news2 from './assets/news2.svg'
import Footer from './components/footer'
import Trailers from './components/trailers'
import Popular from './components/popular'
import Cassa from './components/cassa'

function App() {
  const [array, setArray] = useState({});

  

  return (
    <>
    <div className='main-body'>
      <div className='main-b-p'>
      <div className='main-page'>
        <Menu />
        <div className='categories'>
          <h1>Сейчас в кино</h1>
          <div className='line'></div>
          <Submenu />
        </div>
      </div>
      <div className='films'>
          <Films />
        </div>
        <div className='all-class'>
        <button className='all'>Все новинки</button>
        </div>
        <div className='new-trailers'>
          <div className='all-p-img'>
          <h1>Новые трейлеры</h1>
            <div>
              <p>Все трейлеры</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
              </svg>
            </div>
          </div>
          <img src={faf} />
          <div className='name-rate'>
            <p>Форсаж 9</p>
            <div className='like-dis'>
              <div className='like'>
                <img src={like} />
                <p>3 245</p>
              </div>
              <div className='like-d'>
                <img id='dislike' src={like} />
                <p>420</p>
              </div>
            </div>
          </div>
        </div>
        <div className='new-trailers-more'>
            <Trailers />
            <Trailers />
            <Trailers />
            <Trailers />
        </div>
        <div className='popular'>
          <div className='popular-head'>
            <h1>Популярные фильмы</h1>
            <div className='line'></div>
            <ul>
              <li>Всё время</li>
              <li>2023</li>
              <li>2022</li>
              <li>2021</li>
              <li>2020</li>
              <li>2019</li>
              <li>2019</li>
            </ul>
          </div>
          <div className='films'>
            <Popular />
            <Popular />
            <Popular />
            <Popular />
          </div>
          <div className='arrow'>
              <img id="left" src={left} />
                <p>4/15</p>
              <img src={left} />
            </div>
        </div>
        <div className='people'>
        <div className='people-head'>
            <h1>Популярные персоны</h1>
            <ul>
              <li>За год</li>
              <li>За месяц</li>
              <li>За неделю</li>
            </ul>
          </div>
        </div>
        <div className='peoplse'>
          <div className='actor'>
            <img src={actor1} />
            <p className='place'>1-е место</p>
            <p className='name-actor'>Квентин Тарантино</p>
            <p className='name-eng-actor'>Quentin Tarantino</p>
            <p className='old'>57 лет</p>
          </div>
          <div className='actor'>
            <img src={actor2} />
            <p className='place'>2-е место</p>
            <p className='name-actor'>Джейсон Стейтем</p>
            <p className='name-eng-actor'>Jason Statham</p>
            <p className='old'>52 лет</p>
          </div>
          <div className='actor-react'>
            <div className='actor-rect'>
              <div>
                <p id="name-ru">Тинто Брасс</p>
                <p id="name-eng">Tinto Brass</p>
                <p id="yellow">87 лет</p>
              </div>
              <p>3-е место</p>
            </div>
            <div className='actor-rect'>
              <div>
                <p id="name-ru">Джеки Чан</p>
                <p id="name-eng">Jackie Chan</p>
                <p id="yellow">66 лет</p>
              </div>
              <p>4-е место</p>
            </div>
            <div className='actor-rect'>
              <div>
                <p id="name-ru">Том Харди</p>
                <p id="name-eng">Tom Hardy</p>
                <p id="yellow">42 года</p>
              </div>
              <p>5-е место</p>
            </div>
            <div className='actor-rect' id="no-line">
              <div>
                <p id="name-ru">Акшай Кумар</p>
                <p id="name-eng">Akshay Kumar</p>
                <p id="yellow">52 года</p>
              </div>
              <p>6-е место</p>
            </div>
          </div>
        </div>
        <div className='latest-news'>
          <div className='all-p-img'>
          <h1>Последние новости</h1>
            <div>
              <p>Все новости</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className='latest-news-top'>
          <div className='top-1'>
            <img src={news1} />
            <div>
              <p>12 Окт 2023</p>
              <img src={eye} />
              <p>242</p>
              <img src={comm} />
              <p>14</p>
            </div>
            <h1>Не время умирать. Перенос релиза фильма</h1>
            <p>Но действия представителей оппозиции в равной степени предоставлены сами себе. В рамках спецификации современных стандартов, стремящиеся вытеснить традиционное производство, нанотехнологии указаны как претенденты на роль ключевых факторов.</p>
          </div>
          <div className='tops'>
            <div className='top-2'>
              <img src={news2} />
              <p id="date">12 Окт 2023</p>
              <p id="text-news">Как изменили Соника с последнего анонса </p>
            </div>
            <div className='top-2'>
              <img src={news2} />
              <p id="date">12 Окт 2023</p>
              <p id="text-news">Как изменили Соника с последнего анонса </p>
            </div>
            <div className='top-2'>
              <img src={news2} />
              <p id="date">12 Окт 2023</p>
              <p id="text-news">Как изменили Соника с последнего анонса </p>
            </div>
            <div className='top-2'>
              <img src={news2} />
              <p id="date">12 Окт 2023</p>
              <p id="text-news">Как изменили Соника с последнего анонса </p>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div className='footer'>
          <div className='main-b-p'>
          <div className='all-p-img1'>
          <h1>Ожидаемые новинки</h1>
              <div className='arrow1'>
              <img id="left" src={left} />
                <p>2/5</p>
              <img src={left} />
            </div>
          </div>
          <div className='films'>
            <div className='film'>
              <img id='film' src={joker} />
              <p className='name'>Джокер</p>
              <p className='genre'>Триллер, драма, криминал</p>
            </div>
            <div className='film'>
                <img id='film' src={joker} />
              <p className='name'>Джокер</p>
              <p className='genre'>Триллер, драма, криминал</p>
            </div>
            <div className='film'>
                <img id='film' src={joker} />
              <p className='name'>Джокер</p>
              <p className='genre'>Триллер, драма, криминал</p>
            </div>
            <div className='film'>
                <img id='film' src={joker} />
              <p className='name'>Джокер</p>
              <p className='genre'>Триллер, драма, криминал</p>
            </div>
          </div>
          <div className='cassa'>
            <div className='popular-head'>
              <h1>Кассовые сборы</h1>
              <p>13 марта — 15 марта</p>
              <div className='line'></div>
              <ul>
                <li>Россия</li>
                <li>Весь мир</li>
                <li>США и Канада</li>
              </ul>
            </div>
            <div className='cassa-films'>
              <Cassa />
              <Cassa />
              <Cassa />
              <Cassa />
              <Cassa />
            </div>
            <Footer />
            </div>
          </div>
        </div>
    </>
  )
}

export default App
