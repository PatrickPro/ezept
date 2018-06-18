import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png';


import moment from 'moment'
import ReactSemanticDatetime from './ReactSemanticDatetime'

class RegistrationPage2 extends Component {

/*  constructor () {
    super()
    this.state = {
      myDate: moment()
    }
  } */


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
          Please enter your billing address
        </Header>
        <Form size='large'>
         <Segment stacked>
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
          </Segment>
         </Form>
         </Grid.Column>
       </Grid>
       </div>
     )
   }
 }
export default withRouter(RegistrationPage2)
