import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../components/menu'
import './about.css'
import rating from '../assets/rating.svg'
import dots from '../assets/dots.svg'
import like from '../assets/like.svg'
import heart from '../assets/heart.svg'
import person from '../assets/person.svg'
import Actors from './actors'
import trailer from '../assets/trailer.svg'
import Awards from './awards'
import poster from '../assets/poster.svg'
import moment from '../assets/moment.svg'
import moment1 from '../assets/moment1.svg'
import joker from '../assets/joker.svg'
import left from '../assets/arrow.svg'
import up from '../assets/up.svg'
import ffilm from '../assets/ffilm.svg'
import CommentsInd from './comments-ind'
import Comment from './comment'
import Addcomm from './addcomm'
import Footer from '../components/footer'

const about = () => {

    const [elem, setArray] = useState({});

    const { id } = useParams()


    useEffect(() => {
        fetch('http://192.168.144.66:8081/api/movie/' + id)
            .then((response) => response.json())
            .then(json => {
                setArray(json)
            })
    }, [])

    return (
        <>
            <div className='about-body'>
                <div className='main-b-p'>
                    <Menu />
                    <div className={"about"}>
                        <div className='about-film'>
                        <img src={elem.urlIcon} />
                            <div className='about-description'>
                                <ul>
                                    <li>Главная</li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                                        <path d="M1 1L5 4.38304L1.05501 8" stroke="#4F5B7C" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <li>Фильмы</li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                                        <path d="M1 1L5 4.38304L1.05501 8" stroke="#4F5B7C" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <li id="select">{elem.localName}</li>
                                </ul>
                                <h1>{elem.localName}</h1>
                                <p>{elem.originalName}</p>
                                <img src={rating} />
                                <p id="descr-film">{elem.description}</p>
                                <div className='button-social'>
                                    <button className='watch'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_1_1186)">
                                                <path d="M17.338 7.69217L5.52548 0.410714C4.67087 -0.115419 3.63762 -0.137294 2.76149 0.352199C1.88535 0.841614 1.3623 1.73306 1.3623 2.73662V17.2332C1.3623 18.7506 2.58496 19.9918 4.0877 20C4.0918 20 4.0959 20 4.09993 20C4.56954 20 5.05891 19.8528 5.51598 19.5739C5.88368 19.3495 5.99989 18.8696 5.77556 18.502C5.55122 18.1342 5.07122 18.0181 4.70364 18.2424C4.48985 18.3728 4.28106 18.4402 4.0961 18.4402C3.52911 18.4371 2.92203 17.9514 2.92203 17.2332V2.73666C2.92203 2.30615 3.14641 1.92384 3.52219 1.71388C3.89801 1.50392 4.34118 1.51329 4.70731 1.73872L16.5199 9.02018C16.8749 9.23878 17.0781 9.60327 17.0772 10.0202C17.0764 10.4371 16.8717 10.8008 16.5147 11.0187L7.97419 16.2479C7.60685 16.4728 7.49138 16.9529 7.7163 17.3202C7.94118 17.6876 8.4213 17.8031 8.78865 17.5781L17.3282 12.3495C18.1458 11.8507 18.6351 10.9812 18.637 10.0233C18.639 9.06561 18.1532 8.19405 17.338 7.69217Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_1186">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Смотреть трейлер
                                    </button>
                                    <div className='about-social'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.503 18.3811H19.222C18.359 18.3811 18.099 17.6821 16.552 16.1341C15.2 14.8311 14.629 14.6691 14.287 14.6691C13.814 14.6691 13.685 14.7991 13.685 15.4501V17.5021C13.685 18.0571 13.505 18.3821 12.055 18.3821C10.6483 18.2876 9.28416 17.8602 8.07497 17.1352C6.86578 16.4103 5.84612 15.4084 5.1 14.2121C3.32839 12.0071 2.09571 9.41917 1.5 6.65409C1.5 6.31209 1.63 6.00209 2.282 6.00209H4.562C5.148 6.00209 5.359 6.26309 5.589 6.86609C6.696 10.1241 8.585 12.9581 9.352 12.9581C9.646 12.9581 9.774 12.8281 9.774 12.0951V8.73909C9.677 7.20809 8.864 7.07909 8.864 6.52509C8.87428 6.37893 8.94114 6.24254 9.05037 6.14488C9.15961 6.04723 9.30261 5.996 9.449 6.00209H13.033C13.523 6.00209 13.685 6.24609 13.685 6.83209V11.3621C13.685 11.8511 13.895 12.0131 14.043 12.0131C14.337 12.0131 14.563 11.8511 15.102 11.3131C16.2574 9.90408 17.2013 8.33426 17.904 6.65309C17.9759 6.45124 18.1119 6.27846 18.2912 6.16111C18.4705 6.04375 18.6832 5.98825 18.897 6.00309H21.178C21.862 6.00309 22.007 6.34509 21.862 6.83309C21.0324 8.69151 20.0058 10.4556 18.8 12.0951C18.554 12.4701 18.456 12.6651 18.8 13.1051C19.026 13.4471 19.826 14.1151 20.363 14.7501C21.145 15.5301 21.794 16.4321 22.285 17.4201C22.481 18.0561 22.154 18.3811 21.503 18.3811Z" fill="rgba(255, 255, 255, 0.50)" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="rgba(255, 255, 255, 0.50)" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="rgba(255, 255, 255, 0.50)" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="rgba(255, 255, 255, 0.50)" />
                                        </svg>
                                        <img src={dots} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-rate'>
                            <div className='about-like-dis'>
                                <div className='like'>
                                    <img src={like} />
                                </div>
                                <div className='like-d'>
                                    <img id='dislike' src={like} />
                                </div>
                            </div>
                            <div className='rect-loading'>
                                <p>Рейтинг ожиданий 85%</p>
                                <div className='loading'></div>
                            </div>
                            <img id="heart" src={heart} />
                            <p id="fav">В избранном у 37933 человек </p>
                        </div>
                        <div className='text-about-film'>
                            <div>
                                <div className='titles'>
                                    <div>
                                        <p>Год:</p>
                                        <p className='titles-p'>2020</p>
                                    </div>
                                    <div>
                                        <p>Страна:</p>
                                        <p className='titles-p'>{elem.countries}</p>
                                    </div>
                                    <div>
                                        <p>Слоган:</p>
                                        <p className='titles-p'>"{elem.slogan}"</p>
                                    </div>
                                    <div>
                                        <p>Режиссер:</p>
                                        <p className='titles-p'>Фрэнсис Аннан</p>
                                    </div>
                                    <div>
                                        <p>Сценарий:</p>
                                        <p className='titles-p'>{elem.screenwriters}</p>
                                    </div>
                                    <div>
                                        <p>Продюсер:</p>
                                        <p className='titles-p'>{elem.producers}</p>
                                    </div>
                                    <div>
                                        <p>Оператор:</p>
                                        <p className='titles-p'>{elem.operators}</p>
                                    </div>
                                    <div>
                                        <p>Композитор:</p>
                                        <p className='titles-p'>{elem.composers}</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='titles'>
                                    <div>
                                        <p>Художник:</p>
                                        <p className='titles-p'>{elem.designers}</p>
                                    </div>
                                    <div>
                                        <p>Монтаж:</p>
                                        <p className='titles-p'>{elem.editors}</p>
                                    </div>
                                    <div>
                                        <p>Жанр:</p>
                                        <p className='titles-p'>{elem.genres}</p>
                                    </div>
                                    <div>
                                        <p>Сборы в мире:</p>
                                        <p className='titles-p'>{elem.worldwideGross}</p>
                                    </div>
                                    <div>
                                        <p>Премьера (мир):</p>
                                        <p className='titles-p'>{elem.worldPremiereDate}</p>
                                    </div>
                                    <div>
                                        <p>Премьера (РФ):</p>
                                        <p className='titles-p'>{elem.localPremiereDate}</p>
                                    </div>
                                    <div>
                                        <p>Возраст:</p>
                                        <p className='titles-p'>{elem.ageCategory}</p>
                                    </div>
                                    <div>
                                        <p>Время:</p>
                                        <p className='titles-p'>{elem.durationByMin} мин.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rect-about'>
                            <div>
                                <div className='div-img-p'>
                                    <div className='img-p'>
                                        <img src={person} />
                                        <div className='img-p-inside'>
                                            <p id="name-a">Фрэнсис Аннан</p>
                                            <p id="name-a-eng">Francis Annan</p>
                                            <p id="about-a">Режисёр</p>
                                        </div>
                                    </div>
                                    <div className='img-p'>
                                        <img src={person} />
                                        <div className='img-p-inside'>
                                            <p id="name-a">Фрэнсис Аннан</p>
                                            <p id="name-a-eng">Francis Annan</p>
                                            <p id="about-a">Режисёр</p>
                                        </div>
                                    </div>
                                    <div className='img-p-inside'>
                                        <p id="name-a">Производство:</p>
                                        <p id="about-a-2">1. Arclight Films</p>
                                        <p id="about-a-2">2. Beagle Pug Films</p>
                                        <p id="about-a-2">3. Footprint Films</p>
                                    </div>
                                    <div className='img-p-inside'>
                                        <p id="name-a">Спецэффекты:</p>
                                        <p id="about-a-2">1. Particular Crowd</p>
                                        <p id="about-a-2">2. Premiere Picture</p>
                                        <p id="about-a-2">3. Spier Films</p>
                                    </div>
                                </div>
                                <div className='img-p-inside'>
                                    <p id="name-a">Студия дубляжа:</p>
                                    <p id="about-a-2">1. Пифагор</p>
                                </div>
                            </div>
                        </div>
                        <div className='roles'>
                            <div className='all-p-img'>
                                <h1>В главных ролях:</h1>
                                <div>
                                    <p>Все актёры</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                        <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='actors-page-container'>
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                                <Actors />
                            </div>
                            <ul>
                                <li>Премьеры</li>
                                <li>Трейлеры</li>
                                <li>Рецензии</li>
                                <li>Студии</li>
                                <li>Цитаты</li>
                                <li>Сиквелы и приквелы</li>
                                <li>Постеры</li>
                                <li>Кадры</li>
                                <li>Награды</li>
                            </ul>
                        </div>
                        <div className='new-trailers-actors'>
                            <div className='all-p-img'>
                                <h1>Трейлеры фильма</h1>
                                <div>
                                    <p>Все трейлеры</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                        <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <img src={trailer} />
                            <div className='name-rate'>
                                <p>Побег из Претории</p>
                                <div className='like-dis'>
                                    <div className='like'>
                                        <img src={like} />
                                        <p>426</p>
                                    </div>
                                    <div className='like-d'>
                                        <img id='dislike' src={like} />
                                        <p>74</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='awards'>
                            <div className='all-p-img'>
                                <h1>Награды</h1>
                                <div>
                                    <p>Все награды</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                        <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='awards-page-container'>
                                <Awards />
                                <Awards />
                                <Awards />
                                <Awards />
                            </div>
                        </div>
                        <div className='posters'>
                            <div className='all-p-img'>
                                <h1>Постеры</h1>
                                <div>
                                    <p>Все постеры</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                        <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <p>Побег из Претории</p>
                            <div className='posters-container'>
                                <img src={poster} />
                                <img src={poster} />
                                <img src={poster} />
                                <img src={poster} />
                            </div>
                        </div>
                        <div className='moments'>
                            <div className='all-p-img'>
                                <h1>Кадры из фильма</h1>
                                <div>
                                    <p>Все кадры</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                        <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.2929L20.3431 0.928934C19.9526 0.53841 19.3195 0.538409 18.9289 0.928934C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM-8.74228e-08 9L26 9L26 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='moments-container'>
                                <img src={moment} />
                                <img src={moment1} />
                                <img src={moment1} />
                            </div>
                            <div className='moments-container-1'>
                                <img src={moment1} />
                                <img src={moment1} />
                                <img src={moment} />
                            </div>
                            <h1>Сиквелы и приквелы</h1>
                            <div className='films-1'>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={joker} />
                                        <p>8.50</p>
                                        <p id='type-f'>Сиквел</p>
                                    </div>
                                    <p className='name'>Джокер</p>
                                    <p className='genre'>Триллер, драма, криминал</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={joker} />
                                        <p>8.50</p>
                                        <p id='type-f'>Сиквел</p>
                                    </div>
                                    <p className='name'>Джокер</p>
                                    <p className='genre'>Триллер, драма, криминал</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={joker} />
                                        <p>8.50</p>
                                        <p id='type-f'>Сиквел</p>
                                    </div>
                                    <p className='name'>Джокер</p>
                                    <p className='genre'>Триллер, драма, криминал</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={joker} />
                                        <p>8.50</p>
                                        <p id='type-f'>Сиквел</p>
                                    </div>
                                    <p className='name'>Джокер</p>
                                    <p className='genre'>Триллер, драма, криминал</p>
                                </div>
                            </div>
                            <div className='arrow'>
                                <img id="left" src={left} />
                                <p>1/2</p>
                                <img src={left} />
                            </div>
                        </div>
                        <div className='phrases'>
                            <h1>Цитаты из фильма</h1>
                            <div>
                                <img src={up} />
                                <p>Принимая во внимание показатели успешности, высококачественный прототип будущего проекта не оставляет шанса для своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм деятельности играет определяющее значение для благоприятных перспектив!</p>
                                <p id="bold">Слова отца</p>
                            </div>
                            <div>
                                <img src={up} />
                                <p>Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает актуальность форм воздействия. Приятно, граждане, наблюдать, как непосредственные участники технического прогресса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. Господа, понимание сути ресурсосберегающих технологий создаёт предпосылки для приоритизации разума над эмоциями. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.</p>
                                <p id="bold">Слова странного человека</p>
                            </div>
                        </div>
                        <div className='familiar'>
                            <h1>Похожие фильмы</h1>
                            <div className='films-1'>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={ffilm} />
                                        <p>8.50</p>
                                    </div>
                                    <p className='name'>Гарри Поттер и философский камень</p>
                                    <p className='genre'>Фэнтези, приключения, семейный, ...</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={ffilm} />
                                        <p>8.50</p>
                                    </div>
                                    <p className='name'>Гарри Поттер и Тайная комната</p>
                                    <p className='genre'>Фэнтези, приключения, семейный, ...</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={ffilm} />
                                        <p>8.50</p>
                                    </div>
                                    <p className='name'>Гарри Поттер и узник Азкабана</p>
                                    <p className='genre'>Фэнтези, приключения, семейный, ...</p>
                                </div>
                                <div className='film'>
                                    <div>
                                        <img id='film' src={ffilm} />
                                        <p>8.50</p>
                                    </div>
                                    <p className='name'>Гарри Поттер и Кубок огня</p>
                                    <p className='genre'>Фэнтези, приключения, семейный, ...</p>
                                </div>
                            </div>
                            <div className='arrow'>
                                <img id="left" src={left} />
                                <p>1/2</p>
                                <img src={left} />
                            </div>
                        </div>
                        <div className='comments-2'>
                            <div className='com-1'>
                                <h1>Рецензии к фильму</h1>
                                <button className='com'>Добавить рецензию</button>
                            </div>
                            <div className='ind-container'>
                                <CommentsInd />
                                <CommentsInd />
                                <CommentsInd />
                                <CommentsInd />
                                <CommentsInd />
                            </div>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <Addcomm />
                    </div>
                </div>
            </div>
            <div className='footer-about'>
                <div className='main-b-p'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default about