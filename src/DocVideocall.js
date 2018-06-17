import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { VideoPreview } from 'react-video-preview'

class RegistrationPage3 extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (

      <VideoPreview videoId="webcam-preview" audio={true} width={500} height={500}/>
    )
  }
}

export default withRouter(RegistrationPage3)
