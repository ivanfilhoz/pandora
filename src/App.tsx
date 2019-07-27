import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { routes, home } from './util/routes'

export const App = () => (
  <Router>
    {routes.map(route => (
      <Route key={route.path} path={route.path} component={route.component} />
    ))}
    <Route path="/" exact component={() => <Redirect to={home} />} />
  </Router>
)
