import React, { Component } from 'react';

class Music extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentAlbum: { title: ``, tracks: [] }
    }
  }
  
  componentDidMount() {
    console.log(`Music didMount`, this.props);
    this.props.albums.length > 0 ? this.setState({ currentAlbum: this.props.albums[0] }) : this.setState({ title: ``, tracks: [] });
  }

  changeAlbum = (val) => {
    this.setState({
      currentAlbum: val
    });
  }

  render() {
    return (
        <div className="Music">
          <header className="Music-header">
            <h1 className="Music-title">Music Page</h1>
          </header>
          <div className="Music-intro"></div>
          <div className="Music-Player">
            <div className="Current-Album-Art">Featured Album Coverart</div>
            <div className="Current-Player-Social">
              <div>Currently Listening to: {this.state.currentAlbum.title}</div>
              <iframe src="https://open.spotify.com/embed/album/4gqnsOwnA490OYq58VfJV3"
                width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div>
                <a href="#">Apple</a>
                <a href="#">Spotify</a>
                <a href="#">Amazon Music</a>
                <a href="#">Tidal</a>
                <a href="#">Google Play</a>
                <a href="#">SoundCloud</a>
              </div>
            </div>
          </div>
          <h3>Listen</h3>
          <div className="Music-Entry-Container">
          {this.props.albums.map(el => {
            return (
              <div className="Music-Entry" key={el.title} onClick={() => this.changeAlbum(el)}>
                <img className="Music-Entry-Image" src="#"/>
                <div className="Music-Entry-Title">{el.title}</div>
              
              </div>
            )
          })}
          </div>
        </div>
    );
  }
}

export default Music;
