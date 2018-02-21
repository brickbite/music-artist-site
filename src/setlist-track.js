import React, { Component } from 'react';
// import logo from './logo.svg';

class SetlistTrack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  // componentDidMount() {
  //   console.log(`SetlistTrack didMount`, this.props);
  // }

  render() {
    return (
        <div className="SetlistTrack">
          {/* <header className="SetlistTrack-header">
            <img src={logo} className="SetlistTrack-logo" alt="logo" />
            <h1 className="SetlistTrack-title">Track Title</h1>
          </header> */}
          <div className="SetlistTrack-intro">
            <input type="checkbox" onChange={() => this.props.selectTrack(`${this.props.album}-${this.props.track}`)}/>
            <span>{this.props.track}</span>
          </div>
        </div>
    );
  }
}

export default SetlistTrack;
