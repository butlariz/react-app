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

class Tracks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTracks: []
    }
  }

  componentDidMount() {
    const options = {
      method: "get",
      credentials: 'include'
    };
  
    fetch("https://peaceful-badlands-98440.herokuapp.com/tracks", options)
    .then(res => res.json())
    .then(data => this.setState({dataTracks: data}))
  }

  render() {
    return (
      <div>
        <h1> SongApp </h1>
        <button type="button"> Ver artistas </button>
        {
          this.state.dataTracks.length > 0 ? <Songs text={this.state} /> : "Carregando..."
        }
      </div>
    );
  }
}

export default Tracks;