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

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const AuthButton = withRouter(({ history }) => (
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         fakeAuth.signout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/home' } }
//     const { redirectToReferrer } = this.state

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/login',
//           state: { from: props.location }
//         }} />
//   )} />
// )

class App extends Component {
 
  state ={
    isAuthenticated : false
  }
  // fakeAuth = {
  //   isAuthenticated: false,
  //   authenticate(cb) {
  //     this.isAuthenticated = true
  //     setTimeout(cb, 100)
  //   },
  //   signout(cb) {
  //     this.isAuthenticated = false
  //     setTimeout(cb, 100)
  //   }
  // }

  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState(() => ({
  //       redirectToReferrer: true
  //     }))
  //   })
  // }

  // state = {
  //   isAuthenticated: false
  // }

  // login = () => {
  //   this.setState(() => { isAuthenticated : true })
  // }

  render() {
    const self = this;
    return (
      <Router>
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
