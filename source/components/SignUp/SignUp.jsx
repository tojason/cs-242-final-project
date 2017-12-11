import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
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
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import styles from './SignUp.scss'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        school: 'UIUC',
        email: '',
        password: '',
      },
      message: '',
    };

    this.submitted = false;
    this.success = false;
    this.netid = '';

    axios.defaults.headers.post['Content-Type'] = 'application/json'; // for POST requests

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { cookies } = this.props;
    this.submitted = true;
    console.log(this.state.user);
    axios.post('http://localhost:8080/api/register', this.state.user)
    .then((response) => {
      if (response.status === 200) {
        console.log('User Sign Up Success');
        cookies.set('name', response.data.user, { path: '/' });
        this.success = true;
        this.netid = this.state.user.email;
        this.setState({
          user: {
            name: '',
            school: 'UIUC',
            email: '',
            password: ''
          }
        });
      } else if (response.status === 401) {
        console.log('User Sign Up Failed');
      } else {
        console.log('not able to sign up');
      }
    }).then((error) => {
      console.log('getting error');
      console.log(error);
    });
  }

  onChangeName(event) {
    let curr_user_info = this.state.user;
    curr_user_info.name = event.target.value;
    this.setState({
      curr_user_info
    });
  }

  onChangeSchool(event) {
    let curr_user_info = this.state.user;
    curr_user_info.school = event.target.value;
    this.setState({
      curr_user_info
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
    let msg = '';
    if (this.submitted) {
      if (this.success) {
        msg = this.netid + ' is Sign Up';
        return <Redirect to='/' />;
      } else {
        msg = 'NetID Already Exist';
      }
    }

    return (
      <Container className='SignUp'>
        <Segment padded>
          <Header className='title' size='large'>
            Sign Up
          </Header>
        </Segment>
        <Segment padded>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input
                placeholder='Your Name'
                value={this.state.user.name}
                onChange={this.onChangeName}
                />
            </Form.Field>
            <Form.Field>
              <label>School</label>
              <Input
                placeholder='Your University/College'
                value={this.state.user.school}
                onChange={this.onChangeSchool}
                />
            </Form.Field>
            <Form.Field>
              <label>Email (Use to Sign In)</label>
              <Input
                label='@illinois.edu'
                labelPosition='right'
                placeholder='NetID/Email Address'
                value={this.state.user.email}
                onChange={this.onChangeEmail}
                >
              </Input>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={this.state.user.password}
                onChange={this.onChangePassword}
                />
            </Form.Field>
          </Form>
          <Divider horizontal>{msg}</Divider>
          <Button
            onClick={this.onSignUp}
            primary
            fluid>Sign Up</Button>
          <Divider horizontal></Divider>
          <Link to='/'>
            <Button fluid>Back to Home Page</Button>
          </Link>
        </Segment>
      </Container>
    );
  }
}

SignUp.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(SignUp);
