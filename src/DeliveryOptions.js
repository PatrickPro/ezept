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
          Ihr Ezept
        </Header>
        <Form size='large'>
         <Segment stacked>
         <p align='justified'>Medikament XYZ <br>Dosierung 100ml<br>Verbindlicher Preis: 7,49€</p>
         <p>Zustellung</p>
         <p>Bitte waehlen Sie eine der beiden Optionen</p>

          <ul>
          </ul>
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

export default withRouter(DeliveryOptions)
