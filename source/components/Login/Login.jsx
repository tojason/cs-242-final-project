import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Divider, Input, Grid, Container, Header, Form } from 'semantic-ui-react';
import styles from './Login.scss';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'; // api
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      },
      message: 'User Not Login',
    };

    axios.defaults.headers.post['Content-Type'] = 'application/json'; // for POST requests

    this.isLogin = false;
    this.netid = 'No user is Log-In';

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogOut = this.onLogOut.bind(this);

    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  componentWillMount() {
    const { cookies } = this.props;

    this.netid = cookies.get('name');
    if (this.netid) {
      this.isLogin = true;
      this.netid = this.netid + ' is Log-In';
    } else {
      this.netid = 'No user is Log-In';
    }
  }

  onLogin() {
    // should be error message
    if (this.state.user.email == '' || this.state.user.password == '') {
      return;
    }
    const { cookies } = this.props;
    console.log(this.state.user);
    axios.post('http://localhost:8080/api/login', this.state.user)
    .then((response) => {
      if (response.status === 200) {
        console.log('login sucess');
        cookies.set('name', response.data.user, { path: '/' });
        this.isLogin = true;
        this.netid = response.data.user + ' is Log-In';
        this.setState({
          message: response.data.user + " is Login!"
        });
      } else {
        console.log('not able to login');
      }
    }).catch((error) => {
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

  onLogOut(event) {
    this.isLogin = false;
    this.netid = 'No user is Log-In';
    this.props.cookies.remove('name');
    this.setState({
      message: 'No User'
    });
  }

  handleEnterKey(event) {
    if (event.ctrlKey && event.key == 'Enter') {
      this.onLogin();
    }
  }

  handleCtrlDown(event) {
    console.log(event.ctrlKey);
  }

  render() {
    let logout = <span></span>;
    if (this.isLogin) {
      logout = (
        <Button
          className='logout-btn'
          onClick={this.onLogOut}
          color='teal'
          fluid>
          Log-Out
        </Button>
      );
      return <Redirect to='/' />;
    }

    return (
      <Container className='Login' >
        <Segment padded>
          <Header size='large'>
            Account Login
          </Header>
        </Segment>
        <Segment padded>
          <Divider horizontal>{this.netid}</Divider>
          {logout}
          <Form onKeyDown={this.handleEnterKey}>
            <Form.Field>
              <Input
                label='@illinois.edu'
                labelPosition='right'
                id='username'
                placeholder='NetID'
                value={this.state.user.email}
                onChange={this.onChangeEmail}
                />
            </Form.Field>
            <Form.Field>
              <Input
                id='password'
                value={this.state.user.password}
                onChange={this.onChangePassword}
                placeholder='Password'
                type='password'
                />
            </Form.Field>
          </Form>
          <Button
            className='login-btn'
            onClick={this.onLogin}
            primary
            fluid>
            Login
          </Button>
          <Divider horizontal>Or</Divider>
          <Link to='/SignUp'>
            <Button
              color='black'
              fluid
              >
              Sign Up Now
            </Button>
          </Link>
          <Divider horizontal></Divider>
          <Link to='/'>
            <Button fluid>Back to Home Page</Button>
          </Link>
        </Segment>
      </Container>
    )
  }
}

Login.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Login);
