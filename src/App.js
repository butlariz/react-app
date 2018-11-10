import React, { Component } from 'react';
import Form from "./Form.js";
import Button from "./Button.js";
import Tracks from "./Tracks.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    }

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    const userEmail = document.querySelector("#input-email").value;
    const userPass = document.querySelector("#input-password").value;

    const options = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email: userEmail, password: userPass})
    };

    fetch("https://peaceful-badlands-98440.herokuapp.com/login", options)
    .then(res => res.json())
    .then(data => this.setState({isLogged: true}))
  }

  signUp() {
    const userEmail = document.querySelector("#input-email").value;
    const userPass = document.querySelector("#input-password").value;

    const options = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email: userEmail, password: userPass})
    };

    fetch("https://peaceful-badlands-98440.herokuapp.com/signup", options)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    if (this.state.isLogged === false) {
    return (
      <div>
        <h1>SongApp</h1>
        <Form />
        <button type="button" onClick={this.signUp}> Cadastre-se </button>
        <button type="button" onClick={this.login}> Login </button>
      </div>
    );
    } else if (this.state.isLogged === true) {
      return (
      <Tracks />
      );
     }
  }
}

export default App;
