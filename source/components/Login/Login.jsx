import React, { Component } from 'react'
import { Segment, Button, Divider, Input, Grid } from 'semantic-ui-react'
import styles from './Login.scss'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='Login'>
        <Segment padded>
          <Input id='username' placeholder='Username' fluid/>
          <Input id='password' placeholder='Password' fluid/>
          <Button primary fluid>Login</Button>
          <Divider horizontal>Or</Divider>
          <Button secondary fluid>Sign Up Now</Button>
          <Divider horizontal>Or</Divider>
          <Link to='/'><Button fluid>Back to Previous Page</Button></Link>
        </Segment>
      </div>
    )
  }
}

export default Login
