import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { PeopleList } from './components/pages/PeopleList'
import { routes } from './util/routes'

export const App = () => (
  <Router>
    {routes.map(group => (
      <React.Fragment key={group.key}>
        {group.items.map(item => (
          <Route key={item.key} path={item.path} component={item.component} />
        ))}
      </React.Fragment>
    ))}
  </Router>
)
