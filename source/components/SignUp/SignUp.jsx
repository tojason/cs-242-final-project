import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
      Container,
      Header,
      Divider,
      Segment,
      Menu,
      Button,
      Input,
      List,
      Grid,
      Accordion,
      Icon,
      Table,
      Form,
      Label,
      TextArea,
      Dropdown
    } from 'semantic-ui-react'
import axios from 'axios' // api

import styles from './SignUp.scss'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        password: '',
      },
      message: '',
    };

    axios.defaults.headers.post['Content-Type'] = 'application/json'; // for POST requests

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    console.log(this.state.user);
    axios.post('http://localhost:8080/api/register', this.state.user)
    .then((response) => {
      if (response.status === 200) {
        console.log('login sucess');
        this.setState({
          message: response.data.user + " is Sign Up!"
        });
      } else {
        console.log('not able to sign up');
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
      <Container className='SignUp'>
        <Segment padded>
          <Header className='title' size='large'>
            Account SignUp
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
            onClick={this.onSignUp}
            primary
            fluid>Login</Button>
          <Divider horizontal></Divider>
          <Link to='/'>
            <Button fluid>Back to Previous Page</Button>
          </Link>
        </Segment>
      </Container>
    );
  }
}

export default SignUp
