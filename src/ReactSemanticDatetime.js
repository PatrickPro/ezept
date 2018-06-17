import React from 'react'
import moment from 'moment'
import DatetimePicker from 'react-semantic-datetime'
import { Container, Form } from 'semantic-ui-react'

moment.locale('fr') // Important for calendar localization including translation (tested with 'fr' and 'en')

class ReactSemanticDatetime extends React.Component {
  constructor () {
    super()
    this.state = {
      myDate: new Date('1989', '00', '01'),
      dateTimeOpen: false
    }
  }

  render () {
    return (
      <Container>
        <Form.Input
          action={{color: 'teal', icon: 'calendar', onClick: () => this.setState({dateTimeOpen: true})}}
          actionPosition="right"
          value={moment(this.state.myDate).format('L')}
          onClick={() => this.setState({dateTimeOpen: true})}
          disabled={this.state.dateTimeOpen}
          fluid
        />
        {this.state.dateTimeOpen && <DatetimePicker
          color="teal" // optional (default:teal)
          onChange={(value) => {this.setState({myDate: value, dateTimeOpen: false})}} // Mandatory
          value={moment(this.state.myDate)}
          moment={moment(this.state.myDate)}
          time={false}// optional to show time selection, just a date picket if false (default:true)
        />
        }
      </Container>

    )
  }
}

export default ReactSemanticDatetime