import React, { Component, Fragment } from 'react'

import { Route, Router, Switch } from 'react-router-dom'
import './App.css'
import RegistrationPage1 from './RegistrationPage1'
import RegistrationPage2 from './RegistrationPage2'
import RegistrationPage3 from './RegistrationPage3'
import Videocall from './DocVideocall'

import history from './helpers/withTracker'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}

  }

  render () {
    return (

      <Router history={history}>
        <Fragment>
          <Switch>
            <Route path='/consultation' component={(Videocall)}/>
            <Route path='/register/3' component={(RegistrationPage3)}/>
            <Route path='/register/2' component={(RegistrationPage2)}/>
            <Route path='/register' component={RegistrationPage1}/>
            <Route component={RegistrationPage1}/>
          </Switch>
        </Fragment>
      </Router>

    )
  }

}
