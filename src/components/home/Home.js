import React, { Component } from 'react';
import logo from './pi.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>SoftMath</h1>
            </header>
          </div>
        );
      }
}
export default Home;