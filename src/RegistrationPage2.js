import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import moment from 'moment'
import ReactSemanticDatetime from './ReactSemanticDatetime'

class RegistrationPage2 extends Component {

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
          <h1 className="App-title">Please enter your billing address</h1>
        </header>
        <Form>
          <Form.Field>
            <label>Address</label>
            <Form.Group widths='equal'>
              <Form.Input placeholder='Street'/>
              <Form.Input placeholder='Number'/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input placeholder='PLZ'/>
              <Form.Input placeholder='City'/>
            </Form.Group>
          </Form.Field>
          <Link
            to={'/register/3'}><Button primary type='submit'>Continue</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default withRouter(RegistrationPage2)
