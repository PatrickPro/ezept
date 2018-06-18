import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png';
import rabbit from './images/logos/rabbits.jpg';
import turtle from './images/logos/turtles.jpg';



class DeliveryOptions extends Component {
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
          Ihr eZept
        </Header>
        <Form size='large'>
         <Segment stacked>
         <p align='justified'>Medikament XYZ <br/> Dosierung 100ml <br/> Verbindlicher Preis: 7,49€ </p>
         <p>Zustellung</p>
         <p>Bitte waehlen Sie eine der beiden Optionen</p>

          <ul>
          <p>Slow Turtle<Checkbox/></p>
          <li>Klassisches, analoges Rezept </li>
          <li>Freie Apothekenwahl</li>
          <li>Rezept Zustellung in 3-4 Werktagen per Post </li>
          <p> Medikament: 7.49€ <br/> Rezept Versand: 0.00€ </p>
          </ul>


          <p>Fast Rabbit <Checkbox/></p>

          <ul>
          <li>eZept mit Abrechnungsgarantie</li>
          <li>Abwicklung durch unsere Partner-Apotheke</li>
          <li>Medikament am gleichen Tag bzw. ueber Nacht</li>
          <p> Medikament: 7.49€ <br/> Express Zustellung: 0.0€ </p>
          <p> Wunschfenster: 3.99€</p>


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
