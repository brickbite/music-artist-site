import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeEntry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  // componentDidMount() {
  //   console.log(`HomeEntry didMount`, this.props);
  // }

  render() {
    return (
        <div className="HomeEntry">
          <header className="HomeEntry-header">
            <h1 className="HomeEntry-Date">{this.props.tour.date}</h1>
          </header>
          <div className="HomeEntry-Venue">
            <div className="HomeEntry-City">{this.props.tour.city}</div>
            <div className="HomeEntry-Venue">{this.props.tour.venue}</div>
          </div>
          <div className="HomeEntry-Action-Container">
            <div><button className="HomeEntry-Action" onClick={() => console.log(`redirecting to ticketmaster`)}>Tickets + VIP</button></div>
            <div><Link className="HomeEntry-Action" to="/choose-setlist">Choose Setlist</Link></div>
          </div>
        </div>
    );
  }
}

export default HomeEntry;
