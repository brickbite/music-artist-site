import React, { Component } from 'react';
import SetlistAlbum from './setlist-album';

class Setlist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameField: ``,
      emailField: ``,
      tourField: ``,
      tracks: [], // TODO: find better way of organizing objects
      selected: 0
    }
  }
  
  componentDidMount() {
    // console.log(`Setlist didMount`, this.props);
    const tracks = [];
    this.props.albums.map(album => {
      return album.tracks.map(track => {
        const obj = {}
        obj.title = `${album.title}-${track}`;
        obj.selected = false;
        return tracks.push(obj);
      });
    });
    this.setState({
      tracks: tracks
    }, () => { console.log(`Setlist didMount`, this.state); });
  }

  selectTrack = (val) => {
    // TODO: check for counter of # of selected items
    console.log(`selected ${val}`);
    const newTracks = this.state.tracks;
    for (let i = 0; i < newTracks.length; i++) {
      if (newTracks[i].title === val) {
        newTracks[i].selected = !newTracks[i].selected;
      } else {
        continue;
      }
    }
    this.setState({tracks: newTracks});
  }

  updateField = (value, field) => {
    // TODO: debounce
    const obj = {};
    obj[field] = value;
    this.setState(obj);
  }

  submitSetlist = () => {
    if (this.state.nameField === ``) {
      console.log(`Name is required`);
    } else if (this.state.emailField === ``) {
      // TODO: check for valid email address
      console.log(`Email is required`);
    } else if (this.state.tourField === ``) {
      console.log(`please select a tour`);
    } else {
      this.setState({
        nameField: ``,
        emailField: ``,
        tourField: ``
      }, () => console.log(`submitted, resetting name/email`));   
    } 
  }

  render() {
    return (
        <div className="Setlist">
          <header className="Setlist-header">
            <h1 className="Setlist-title">Setlist Stuff</h1>
          </header>
          <p className="Setlist-intro">
            Setlist Page
          </p>
          {this.props.albums.map((el) => {
            return (
              <SetlistAlbum album={el} key={el.title} selectTrack={this.selectTrack}/>
            );
          })}

          <div className="Setlist-selected">
            <h3>Selected Tracks (Select up to 5)</h3>
            {this.state.tracks.map(el => el.selected ? <div key={el.title}>{el.title}</div> : null)}
          </div>

          <div className="Setlist-form">
            <h3>Submit</h3>
            <input type="textbox" placeholder="name" value={this.state.nameField} onChange={(e) => this.updateField(e.target.value, `nameField`)}/>
            <input type="textbox" placeholder="e-mail address" value={this.state.emailField} onChange={(e) => this.updateField(e.target.value, `emailField`)}/>
            <select value={this.state.tourField} onChange={(e) => this.updateField(e.target.value, `tourField`)}>
              <option value="">select a tour</option>
              {this.props.tours.map(el => <option value={el.date} key={el.date}>{`${el.date}: ${el.city} @ ${el.venue}`}</option>)}
            </select>
            <button onClick={this.submitSetlist}>Submit</button>
          </div>
        </div>
    );
  }
}

export default Setlist;
