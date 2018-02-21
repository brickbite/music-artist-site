import React, { Component } from 'react';
import HomeEntry from './home-entry';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  // componentDidMount() {
  //   console.log(`Home didMount`, this.props);
  // }

  render() {
    return (
        <div className="Home">
          <header className="Home-header">
            <h1 className="Home-title">Home Stuff</h1>
          </header>
          <div className="Home-intro">
            <p>Home Page</p>
            <p>Banner Feature Image</p>
            <p>Promo Youtube</p>
          </div>
          {this.props.tours.map((el) => {
            return (
              <HomeEntry tour={el} key={el.date}/>
            );
          })}
        </div>
    );
  }
}

export default Home;
