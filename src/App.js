import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Register from './components/Register'
import logo from './tela-cadastro/logo-hearme-02.png'

class App extends Component {
  render() {
    return (
      // <header className="header">
      //     <img src={logo} width="150"/><
      // </header>
      <Register className='form' logo={logo} />
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
