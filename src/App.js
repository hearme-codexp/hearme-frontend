import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, withRouter } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import Home from './components/page/home'
import LandingPage from './components/page/LandingPage'
import Footer from './components/footer'
import PrivateRoute from './components/privateRoute'
import { fakeAuth } from './functions.js'

class App extends Component {
 
  constructor(props){
    super(props);

    this.state ={
      isAuthenticated : false,
      // location: window.location.pathname
    }
  }

  componentUpdate(prevProps, prevState, snapshot){
    // this.setState({
    //   location: window.location.pathname
    // })
  }

  render() {
    const self = this;
    return (
      <Router>
        <React.Fragment>
            <Route exact path="/login" render={(props) => <Login {...props} onLogin={() => {
              self.setState({isAuthenticated : true})}}></Login>}   />
            <Route path="/register" component={RegisterForm} />
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute path="/home" component={Home} isAuthenticated={this.state.isAuthenticated}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
