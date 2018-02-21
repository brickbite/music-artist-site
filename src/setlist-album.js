import React, { Component } from 'react';
import SetlistTrack from './setlist-track';

class SetlistAlbum extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  // componentDidMount() {
  //   console.log(`SetlistAlbum didMount`, this.props);
  // }

  render() {
    return (
        <div className="SetlistAlbum">
          <header className="SetlistAlbum-header">
            <h1 className="SetlistAlbum-title">{this.props.album.title}</h1>
          </header>
          <div className="SetlistAlbum-intro">
          {this.props.album.tracks.map((el) => {
            return (
              <SetlistTrack track={el} album={this.props.album.title} key={`${this.props.album.title}-${el}`} selectTrack={this.props.selectTrack} />
            );
          })}
          </div>
        </div>
    );
  }
}

export default SetlistAlbum;
