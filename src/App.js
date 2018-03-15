import React, { Component } from 'react';
import logo from './logo-hearme-02.png'
import './App.css';
// import Register from './components/page/Register'
// import Login from './components/login'
import Map from './components/maps'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <img src={logo} alt="logo" width="150" /> 
        </header>
        <div className="section">
            {/* <Register /> */}
            {/* <Login /> */}
            <Map />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
