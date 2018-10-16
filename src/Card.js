import React from 'react';
import './Card.css';

function Card(props) {
  return(
    <ul className="list-artists">
    {
      props.text.dataArtists.map((item, index) => {
      return <li id={index}> {item.name} </li>
      })
    }
    </ul>
  )
}

export default Card;
