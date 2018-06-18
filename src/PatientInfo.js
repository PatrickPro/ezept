import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import moment from 'moment'
import logo from './images/logos/logoEzept.png'
import serverAddress from './myIPaddress'

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
        <header className="App-header">
          {<img src={logo} className="App-logo" alt="logo"/>}
          Briefing
        </header>
        <div style={{padding:'25px'}} >
        <h1>Briefing John Lilki</h1>
        <h3>Geboren 14. September 1983 (34 Jahre)</h3>

        <h2>Vorerkrankungen:</h2>
        <p>Allergie, Diabetes</p>

        <h2>Bemerkungen:</h2>
        <p>Ich benötige ein neues Rezept für Teststreifen</p>
          <br />
        <Button onClick={this.props.history.goBack} className='left'>Zurück</Button>
        <Button style={{marginLeft:'200px'}} primary onClick={() => {window.location = serverAddress+':4443/src/doc.html'}}>Videoanruf</Button>


      </div>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
