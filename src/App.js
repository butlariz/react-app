import React, { Component } from 'react';
import './App.css';
import Card from "./Card.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // const options = {
    //   method: "post",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify({email: "rafael@laboratoria.la", password: "banana"})
    // };

    // fetch("https://peaceful-badlands-98440.herokuapp.com/login", options)
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  handleClick() {
    const options = {
      method: "get",
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      credentials: 'include'
    };

    fetch("https://peaceful-badlands-98440.herokuapp.com/artists", options)
    .then(res => res.json())
    .then(data => this.setState({data}))
  }

  render() {
    return (
      <div>
        <Card>
          Ouça músicas
          <button onClick={this.handleClick}>Ver artistas</button>
        </Card>
      </div>
    );
  }
}

export default App;
