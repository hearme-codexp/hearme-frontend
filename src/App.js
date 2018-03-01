import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <Input type="text" placeholder="nome" className="input input--small"/>
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
