import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './films.css'

const films = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.144.66:8081/api/movies')
    .then(data => data.json())
    .then(data => {
      setData(data)
    })
  }, [])

  return (
    <>
    {
      data.map((elem) => {
        return <Link to={`/about/${elem.id}`}><div className='film'>
        <div>
          <img id='film' src={elem.urlIcon} />
          <p>{elem.averageRating}</p>
        </div>
        <p className='name'>{elem.localName}</p>
        <p className='genre'>{elem.genres}</p>
      </div></Link>
      })
    }
    </>
  )
}

export default films