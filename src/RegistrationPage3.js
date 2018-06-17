import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import moment from 'moment'
import ReactSemanticDatetime from './ReactSemanticDatetime'

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

          <Link
            to={'/consultation'}><Button primary type='submit'>Connect Me</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default withRouter(RegistrationPage3)
