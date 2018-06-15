import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './App.css'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name'/>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'/>
          </Form.Field>


          <Form.Group widths='equal'>
            <Form.Field>
              <label>Address</label>
            </Form.Field>
            <Form.Input fluid label='First name' placeholder='First name'/>
            <Form.Input fluid label='Last name' placeholder='Last name'/>
            <Form.Select fluid label='Gender' options={options} placeholder='Gender'/>
          </Form.Group>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Button width={'40px'} primary>Continue</Button>
      </div>
    )
  }
}

export default App
