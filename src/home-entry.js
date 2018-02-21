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
            <h1 className="HomeEntry-title">{this.props.tour.date}</h1>
          </header>
          <div className="HomeEntry-intro">
            <p>{this.props.tour.city}</p>
            <p>{this.props.tour.venue}</p>
            <button onClick={() => console.log(`redirecting to ticketmaster`)}>Tickets + VIP</button>
            <Link to="/choose-setlist">Choose Setlist</Link>
          </div>
        </div>
    );
  }
}

export default HomeEntry;
