import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import moment from 'moment'
import ReactSemanticDatetime from './ReactSemanticDatetime'

class RegistrationPage1 extends Component {

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
          <h1 className="App-title">Please register</h1>
        </header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name'/>
            <Form.Input fluid label='Last name' placeholder='Last name'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Date</label>
              <ReactSemanticDatetime/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Email' placeholder='joe@schmoe.com'/>
          </Form.Group>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions'/>
          </Form.Field>
          <Link
            to={'/register/2'}><Button primary type='submit'>Submit</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
