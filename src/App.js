import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, withRouter } from 'react-router-dom'
import './App.css';
import RegisterForm from './components/RegisterForm'
import Login from './components/login'
import Home from './components/page/home'
import LandingPage from './components/page/LandingPage'
import Header from './components/header'
import Footer from './components/footer'
import PrivateRoute from './components/privateRoute'
import { fakeAuth } from './functions.js'
import { browserHistory } from 'react-router';

class App extends Component {
 
  state ={
    isAuthenticated : false
  }
  
  handlerChange = () => {
    browserHistory.listen( location =>  {
      
     });
  }
  
  render() {
    const self = this;
    return (
      <Router onChange={handlerChange}>
        <React.Fragment>
          <Header />
          <main className="section">
            <Route exact path="/login"  render={(props) => <Login {...props} onLogin={() => {
              self.setState({isAuthenticated : true})}}></Login>}   />
            <Route path="/register" component={RegisterForm} />
            <Route exact path="/" component={LandingPage} />
            <Route path="/footer" component={Footer} />
            <PrivateRoute path="/home" component={Home} isAuthenticated={this.state.isAuthenticated}/>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
