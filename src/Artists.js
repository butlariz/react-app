import React from 'react';
import CardSong from "./CardSong.js";

function Songs(props) {
  return (
    <div>  
      <ul className="list-artists">
        <CardSong text={props.text}/>
      </ul>
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
        <h1> O que você quer ouvir hoje? </h1>
        {
          this.state.dataArtists.length > 0 ? <Songs text={this.state} /> : "Carregando..."
        }
      </div>
    );
  }
}

export default Artists;