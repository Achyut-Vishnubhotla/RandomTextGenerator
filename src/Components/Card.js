import React,{useState} from 'react'
import Data from './Data'
import './Card.css'
import { getByTitle } from '@testing-library/react'
function Card() { 
    const [title,setTitle] = useState(Data[0])

    const getTitle =()=>{
        let randomNum = Math.floor(Math.random() * Data.length);
        setTitle(Data[randomNum])
    }
  return (
    <div className='App'>
      <div className="title">
        <p>"UserId" : {title.userId}</p>
        <p>"id" : {title.id}</p>
        <h2>"Title" : {title.title}</h2>
        <p>"Body" : {title.body}</p>
        <div className="btnContainer">
            <button className='btn' onClick={getTitle}>Next</button>
        </div>
        <p>BY - "Sri Achyut Vishnubhotla"(RA2111003011155)</p>
        </div>
    
    </div>
  )
}

export default Card