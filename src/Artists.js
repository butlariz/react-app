import React from 'react';
import Card from "./Card.js";

function Home(props) {
  return (
    <div>
      <h1> O que você quer ouvir hoje? </h1>
      <Card text={props.text}/>
    </div>
  )
}

class Artists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArtists: []
    }
  }

  componentDidMount() {
    const options = {
      method: "get",
      credentials: 'include'
    };
  
    fetch("https://peaceful-badlands-98440.herokuapp.com/artists", options)
    .then(res => res.json())
    .then(data => this.setState({dataArtists: data}))
  }

  render() {
    return (
      <div>
        {
          this.state.dataArtists.length > 0 ? <Home text={this.state} /> : "Carregando..."
        }
      </div>
    );
  }
}

export default Artists;