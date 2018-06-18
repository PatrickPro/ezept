import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form, Grid, Header, Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png'

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
            height: 100%;
          }
          `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' textAlign='center'>
          Bitte registrieren Sie sich
        </Header>
        <Form size='large'>
         <Segment stacked>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Vorname' placeholder='Vorname'/>
            <Form.Input fluid label='Nachname' placeholder='Nachname'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Date</label>
              <ReactSemanticDatetime/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Email' placeholder='joe@schmoe.de'/>
          </Form.Group>
          <Form.Field>
            <Checkbox label='Ich stimme der Einwilligungserklärung und AGBs zu'/>
          </Form.Field>
          <Link
            to={'/register/2'}><Button  primary type='submit'>Registrieren</Button>
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
