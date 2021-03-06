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
      countSelected: 0
    }
  }
  
  componentDidMount() {
    // console.log(`Setlist didMount`, this.props);
    const tracks = [];
    this.props.albums.map(album => {
      return album.tracks.map(track => {
        const obj = {};
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
    // console.log(`selected ${val}`);
    const newTracks = this.state.tracks;
    let newCount = 0;
    for (let i = 0; i < newTracks.length; i++) {
      if (newTracks[i].title === val) {
        newTracks[i].selected = !newTracks[i].selected;
        if (newTracks[i].selected) {
          newCount++
        }
      } else {
        if (newTracks[i].selected) {
          newCount++
        }
        continue;
      }
    }
    this.setState({tracks: newTracks, countSelected: newCount}, () => console.log(`${this.state.countSelected}/5 selected`));
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
      console.log(`Email is required`);
    // TODO: check for valid email address
    // } else if (this.state.emailField === ``) {
      // console.log(`Please enter a valid email`);
    } else if (this.state.tourField === ``) {
      console.log(`Please select a tour`);
    } else {
      // TODO: clear selected items
      this.setState({
        nameField: ``,
        emailField: ``,
        tourField: ``
      }, () => console.log(`submitted, resetting fields`));   
    } 
  }

  render() {
    return (
        <div className="Setlist">
          <header className="Setlist-Header">
            <h1 className="Setlist-Title">Setlist Stuff</h1>
          </header>
          <p className="Setlist-Intro">
            Setlist Page
          </p>
          {this.props.albums.map((el) => {
            return (
              <SetlistAlbum album={el} key={el.title} selectTrack={this.selectTrack}/>
            );
          })}

          <div className="Setlist-Selected">
            <h3>Selected Tracks (Select up to 5)</h3>
            {this.state.tracks.map(el => el.selected ? <div key={el.title}>{el.title}</div> : null)}
          </div>

          <div className="Setlist-Form">
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
