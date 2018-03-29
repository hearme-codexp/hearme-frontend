import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import Home from './components/page/home'
import LandingPage from './components/page/LandingPage'
import Header from './components/header'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <main className="section">
            <Route exact path="/login" component={Login} />
            <Route path="/cadastro" component={RegisterForm} />
            <Route path="/home" component={Home} />
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/footer"} component={Contact} />
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
