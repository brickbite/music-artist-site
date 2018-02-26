import React, { Component } from 'react';

class Music extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // TODO: Combine currentAlbum and currentPlayer
      currentAlbum: {
        title: ``,
        tracks: []
      },
      currentPlayer: {
        spotifyEmbed: ``,
        linkApple: `#Apple`,
        linkSpotify: `#Spotify`,
        linkAmazon: `#Amazon-Music`,
        linkTidal: `#Tidal`,
        linkGoogle: `#Google-Play`,
        linkSoundCloud: `#SoundCloud`,
      }
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
                <a href={this.state.currentPlayer.linkApple}>Apple</a>
                <a href={this.state.currentPlayer.linkSpotify}>Spotify</a>
                <a href={this.state.currentPlayer.linkAmazon}>Amazon Music</a>
                <a href={this.state.currentPlayer.linkTidal}>Tidal</a>
                <a href={this.state.currentPlayer.linkGoogle}>Google Play</a>
                <a href={this.state.currentPlayer.linkSoundCloud}>SoundCloud</a>
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
