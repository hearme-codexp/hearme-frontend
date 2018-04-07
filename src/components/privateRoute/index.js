import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link, withRouter } from 'react-router-dom'

export default ({ component: Component, isAuthenticated: isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
      // isAuthenticated === true
      true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )