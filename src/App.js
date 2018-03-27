import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import Home from './components/page/home'
import LandingPage from './components/page/LandingPage'
import hearMe from '../src/img/logo-hearme-02.png'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <img src={hearMe} className="hearme"/>
              <a className="navbar-brand" href="#">  </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
                </form>
              </div>
            </nav>
          </header>
          <div className="section">
            <Route exact path="/login" component={Login} />
            <Route path="/cadastro" component={RegisterForm} />
            <Route path="/home" component={Home} />
            <Route path="/" component={LandingPage} />            
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
