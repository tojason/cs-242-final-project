import React, { Component } from 'react'
import { Segment, Button, Divider, Input, Grid, Container, Header } from 'semantic-ui-react'
import styles from './Login.scss'
import { Link } from 'react-router-dom'
import axios from 'axios' // api

class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        email: '',
        password: '',
      },
      message: 'User Not Login',
    };

    axios.defaults.headers.post['Content-Type'] = 'application/json'; // for POST requests

    this.isLogin = false;

    this.onLogin = this.onLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onLogin() {
    console.log(this.state.user);
    axios.post('http://localhost:8080/api/login', this.state.user)
    .then((response) => {
      if (response.status === 200) {
        console.log('login sucess');
        this.setState({
          message: response.data.user + " is Login!"
        });
      } else {
        console.log('not able to login');
      }
    }).then((error) => {
      console.log('getting error');
      console.error(error);
    });
    this.setState({
      user: {
        email: '',
        password: ''
      }
    });
  }

  onChangeEmail(event) {
    let curr_user_info = this.state.user;
    curr_user_info.email = event.target.value;
    this.setState({
      curr_user_info
    });
  }

  onChangePassword(event) {
    let curr_user_info = this.state.user;
    curr_user_info.password = event.target.value;
    this.setState({
      curr_user_info
    });
  }

  render() {
    return (
      <Container className='Login'>
        <Segment padded>
          <Header size='large'>
            Account Login
          </Header>
        </Segment>
        <Segment padded>
          <Divider horizontal>{this.state.message}</Divider>
          <Input
            id='username'
            placeholder='Username'
            value={this.state.user.email}
            onChange={this.onChangeEmail}
            fluid/>
          <Input
            id='password'
            value={this.state.user.password}
            onChange={this.onChangePassword}
            placeholder='Password'
            type='password'
            fluid/>
          <Button
            onClick={this.onLogin}
            primary
            fluid>Login</Button>
          <Divider horizontal>Or</Divider>
          <Link to='/SignUp'>
            <Button secondary fluid>Sign Up Now</Button>
          </Link>
          <Divider horizontal></Divider>
          <Link to='/'>
            <Button fluid>Back to Previous Page</Button>
          </Link>
        </Segment>
      </Container>
    )
  }
}

export default Login