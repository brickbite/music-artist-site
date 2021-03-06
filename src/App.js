import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './app.css';
import Home from './home';
import Music from './music';
import Setlist from './setlist';

class App extends Component {
  constructor() {
    super()

    this.state = {
      artist: `Big Dan`,
      promoVideo: ``,
      tours: [
        {
          date: `2018.02.21`,
          city: `Culver City, CA`,
          venue: `House of Blue`
        },
        {
          date: `2018.02.23`,
          city: `Orange, CA`,
          venue: `Jazzy Club`
        },
        {
          date: `2018.02.25`,
          city: `San Francisco, CA`,
          venue: `Soft Rock Cafe`
        },
        {
          date: `2018.02.28`,
          city: `Santa Monica, CA`,
          venue: `Live Perf Venue`
        }
      ],
      albums: [
        {
          title: `Album1`,
          tracks: [ `Track1`, `Track2`, `Track3`, `Track4` ]
        },
        {
          title: `Album2`,
          tracks: [ `Track1`, `Track2`, `Track3`, `Track4` ]
        },
        {
          title: `Album3`,
          tracks: [ `Track1`, `Track2`, `Track3`, `Track4` ]
        },
        {
          title: `Album4`,
          tracks: [ `Track1`, `Track2`, `Track3`, `Track4` ]
        }
      ],
      picked: 0
    }
  }

  componentDidMount() {
    console.log(`App didMount`);
    // TODO: (if needed) fetch assets and update state as needed
  }

  submitVote = (val) => {
    console.log(`submitted ${val}`);
  }

  render() {
    return (
      <Router>
        <div>
          <h1 className="App-Header">
            <Link to="/">{this.state.artist}</Link>
            <Link to="/">Tour</Link>
            <Link to="/music">Music</Link>
            <Link to="/choose-setlist">Choose Setlist</Link>
            <a href="#">Store</a>
          </h1>

          <Switch>
            <Route exact path="/" component={() => <Home tours={this.state.tours}/>}/>
            <Route path="/music" component={() => <Music albums={this.state.albums}/>} />
            <Route path="/choose-setlist" component={() => <Setlist albums={this.state.albums} tours={this.state.tours} submitVote={this.submitVote}/>}/>
            <Route path="/404" component={() => <div>404: Not Found</div>} />
          </Switch>

          <p className="App-Footer">ć2018 {this.state.artist}</p>
        </div>
      </Router>
    );
  }
}

export default App;
