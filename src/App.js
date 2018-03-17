import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import LandingPage from './components/page/LandingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
            <LandingPage/>            
            {/*<RegisterForm options={["Leve", "Alta"]}/>*/}
            {/* <Login />  */}
            <Route exact path="/login" component={Login} />
            <Route path="/cadastro" component={RegisterForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
