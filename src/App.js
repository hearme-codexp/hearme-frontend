import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import logo from './logo-hearme-02.png'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <img src={logo} alt="logo" width="150" className="logo" />
        </header>
        <div className="section">
            <RegisterForm options={["Leve", "Alta"]}/>
            {/* <Login /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
