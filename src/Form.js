import React from 'react';
// import Button from "./Button.js";
import './Form.css';

function Form(props) {
  return(
    <form> 
      <input type="text" id="input-email" className="input-form" placeholder="email"></input>
      <input type="password" id="input-password" className="input-form" placeholder="senha" ></input>
      {/* <Button text="Cadastrar"/> */}
    </form>
  )
}

export default Form;
