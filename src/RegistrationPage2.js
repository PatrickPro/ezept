import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png';

class RegistrationPage2 extends Component {
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
        <Header as='h2' textAlign='center'>
          Bitte geben Sie Ihre Rechnungsadresse ein:
        </Header>
        <Form size='large'>
         <Segment stacked>
          <Form.Field>
            <label>Address</label>
            <Form.Group widths='equal'>
              <Form.Input placeholder='Strasse'/>
              <Form.Input placeholder='Hausnummer'/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input placeholder='PLZ'/>
              <Form.Input placeholder='Stadt'/>
            </Form.Group>
          </Form.Field>
          <Link
            to={'/register/1'}><Button primary type='submit' >Zurück</Button>
          </Link>
          <Link
            to={'/register/3'}><Button primary type='submit' >Weiter</Button>
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
