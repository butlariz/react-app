import React from 'react';
import './Card.css';

function CardSong(props) {
  return(
    props.text.dataTracks.map((item, index) => {
      console.log(item)
      return <li key={index}> 
              {item.title}
              <iframe src={item.url} />
            </li>
    })
  )
}

export default CardSong;
