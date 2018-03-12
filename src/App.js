import React, { Component } from 'react';
import './App.css';
import Register from './components/page/Register'
import Login from './components/login'
import logo from './logo-hearme-02.png'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <img src={logo} alt="logo" width="150" /> 
        </header>
        <div className="section">
            <Register />
            {/* <Login /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
