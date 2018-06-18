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
        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='#2986ce' textAlign='center'>
              Welches Medikament möchten Sie verschreiben?
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Medikament' placeholder='Medikament'/>
                  <Form.Input fluid label='Dosierung' placeholder='Dosierung'/>
                </Form.Group>
                <Form.TextArea
                  autoHeight
                  onChange={this.handleMessageChange}
                  label="Diagnose"
                  value={''}
                  placeholder="Geben Sie Ihre Diagnose hier ein"
                  rows={3}
                />
                <Form.Field>
                  <Checkbox label='Versand durch Partner-Apotheke'/>
                </Form.Field>
                <Button color='teal' fluid size='large' primary type='submit'>eZept ausstellen</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
