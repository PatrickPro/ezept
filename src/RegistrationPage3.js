import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png';


class RegistrationPage3 extends Component {
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
          Anamnesis
        </Header>
        <Form size='large'>
         <Segment stacked>
            <Form.Input fluid label='Question1' placeholder='Question1'/>
            <Form.Input fluid label='Question2' placeholder='Question2'/>

          <Link
            to={'/consultation'}><Button primary type='submit'>Connect Me</Button>
          </Link>
          </Segment>
         </Form>
         </Grid.Column>
       </Grid>
       </div>
     )
   }
  }

export default withRouter(RegistrationPage3)
