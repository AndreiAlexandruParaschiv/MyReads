import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Switch, Route, withRouter} from 'react-router-dom'
import Home from './views/Home'
import Search from './views/Search'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route component={withRouter(Home)} exact path="/" />
          <Route component={withRouter(Search)} exact path={"/search"} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp