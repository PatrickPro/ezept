import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png';

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
          {<img src= {logo} className="App-logo" alt="logo" />}
        </header>
        <style>{`
          body > div,
          body > div > div,
          body > div > div.login-form {
            height: 90%;
          }
          `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Please enter your personal details
        </Header>
        <Form size='large'>
         <Segment stacked>
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
            to={'/register/2'}><Button color='teal' fluid size='large' primary type='submit'>Submit</Button>
          </Link>
         </Segment>
        </Form>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
