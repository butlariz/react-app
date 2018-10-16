import React from 'react';

function Button(props) {
  return(
    <button type="button" onClick={this.handleClick}> {props.text} </button>
  )
}

export default Button;
