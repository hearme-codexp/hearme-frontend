import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import logo from './logo-hearme-02.png'
import Home from './components/page/home'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header className="header">
            <img src={logo} alt="logo" width="150" className="logo" />
          </header>
          <div className="section">
            {/*<RegisterForm options={["Leve", "Alta"]}/>*/}
            {/* <Login />  */}
            <Route exact path="/login" component={Login} />
            <Route path="/cadastro" component={RegisterForm} />
            <Route path="/home" component={Home} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
