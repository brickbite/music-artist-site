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
        spotifyEmbed: `https://open.spotify.com/embed/album/4gqnsOwnA490OYq58VfJV3`,
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
            <img className="Current-Album-Art"
              src="assets/cover_dark-sky-paradise.jpg">
            </img>
            <div className="Current-Player-Social">
              <div>Currently Listening to: {this.state.currentAlbum.title}</div>
              <iframe src={this.state.currentPlayer.spotifyEmbed}
                width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <div className="Social-Container">
                <a className="Social-Apple"
                  href={this.state.currentPlayer.linkApple}>
                </a>
                <a className="Social-Spotify"
                  href={this.state.currentPlayer.linkSpotify}>
                </a>
                <a className="Social-Amazon"
                  href={this.state.currentPlayer.linkAmazon}>
                </a>
                <a className="Social-Tidal"
                  href={this.state.currentPlayer.linkTidal}>
                </a>
                <a className="Social-Google"
                  href={this.state.currentPlayer.linkGoogle}>
                </a>
                <a className="Social-SoundCloud"
                  href={this.state.currentPlayer.linkSoundCloud}>
                </a>
              </div>
            </div>
          </div>
          <h3>Listen</h3>
          <div className="Music-Entry-Container">
          {this.props.albums.map(el => {
            return (
              <div className="Music-Entry" key={el.title} onClick={() => this.changeAlbum(el)}>
                <img className="Music-Entry-Image" src="#"/>
                <div className="Music-Entry-Title">
                  {el.title}
                  <div className="Music-Entry-Action">listen</div>
                </div>
                
              </div>
            )
          })}
          </div>
        </div>
    );
  }
}

export default Music;
