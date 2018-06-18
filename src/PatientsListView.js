import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Table, Button } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png'

import moment from 'moment'

class RegistrationPage1 extends Component {

  constructor () {
    super()
    this.state = {
      myDate: moment()
    }
  }

  render () {
    return (
      <div className="App2">
        <header className="App-header">
          {<img src={logo} className="App-logo" alt="logo"/>}
          Wartezimmer
        </header>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Geburtsdatum</Table.HeaderCell>
              <Table.HeaderCell>Aktion</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>14. September 1983</Table.Cell>
              <Table.Cell>
                <Link to={'/patientInfo'}><Button primary>Beratung starten</Button></Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>26. Januar, 1964</Table.Cell>
              <Table.Cell><Button disabled>Beratung starten</Button></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>11. Mai 1994</Table.Cell>
              <Table.Cell><Button disabled>Beratung starten</Button></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default withRouter(RegistrationPage1)
