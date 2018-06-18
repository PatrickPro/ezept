import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

import moment from 'moment'

class RegistrationPage3 extends Component {

  constructor () {
    super()
    this.state = {
      myDate: moment()
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Anamnese</h1>
        </header>
        <Form>
          <Form.Input fluid label='Question1' placeholder='Question1'/>
          <Form.Input fluid label='Question2' placeholder='Question2'/>


          <Button primary type='submit'
                  onClick={() => {window.location = 'https://10.19.1.178:4443/src/videocall.html'}}>Connect Me</Button>

        </Form>
      </div>
    )
  }
}

export default withRouter(RegistrationPage3)
