import React, { Component } from 'react';
import logo from './img/logo-hearme-02.png'
import './App.css';
// import Register from './components/page/Register'
// import Login from './components/login'
// import Map from './components/maps'
import Home from './components/page/home'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <img src={logo} alt="logo" width="150" /> 
        </header>
        <main className="section">
            {/* <Register /> */}
            {/* <Login /> */}
            <Home />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
