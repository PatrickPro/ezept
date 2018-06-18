import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import moment from 'moment'
import logo from './images/logos/logoEzept.png'

class RegistrationPage1 extends Component {

  constructor () {
    super()
    this.state = {
      myDate: moment(),
    }
  }

  render () {
    return (
      <div className="App2">
        <header  style={{height: '124px'}} className="App-header">
          {<img src={logo} className="App-logo" alt="logo"/>}
          Video Call
          <button style={{marginLeft: '93%', marginTop: '-900px'}}
                  class="ui inverted blue basic button">Auflegen</button>
        </header>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
