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
      Checkbox,
      Dropdown
    } from 'semantic-ui-react'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios'; // api

import styles from './CreateDocument.scss'

class CreateDocument extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user: '',
      data: '',
      message: ''
    };

    this.isLogin = false;

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { cookies } = this.props;

    let user_netid = cookies.get('name');
    if (user_netid) {
      this.isLogin = true;
      this.setState({
        user: user_netid
      });
      console.log("setting");
    } else {
      this.isLogin = false;
    }
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  onUserChange(event) {
    this.setState({
      user: event.target.value
    });
  }

  onDataChange(event) {
    let curr_data = this.state.data;
    this.setState({
      data: event.target.value
    });
  }

  onSubmit(event) {
    console.log(this.state);
    var curr_document = {};
    curr_document.title = this.state.title;
    curr_document.user = this.state.user;
    curr_document.data = this.state.data;
    axios.post('http://localhost:8080/api/document', curr_document).then((response) => {
      console.log('no error');
      if (response.status == 200) {
        this.setState({
          message: 'Submitted'
        });
        console.log('submitted')
      }
      else if (response.status == 201) {
        this.setState({
          message: 'Created'
        });
        console.log("created")
      }
      else if (response.status == 500) {
        console.log('Server Error');
      }
      else if (response.status == 404) {
        console.log('')
      }
    }).then((error) => {
      console.error(error);
    });
    // axios post
  }

  render() {
    return (
      <Container className='CreateDocument'>
        <Segment padded>
          <Header size='large' textAlign='center'>
            Create Document
          </Header>
        </Segment>
        <Segment padded>
          <Form>
            <Form.Field>
              <label>Title (Unique)</label>
              <Input
                value={this.state.title}
                onChange={this.onTitleChange}
                placeholder='Document Name' />
            </Form.Field>
            <Form.Field>
              <label>Owner/Netid</label>
              <Input
                value={this.state.user}
                onChange={this.onUserChange}
                placeholder='User NetID'
                />
            </Form.Field>
            <Form.Field
              value={this.state.data}
              onChange={this.onDataChange}
              label='Content'
              control='textarea'
              rows='5'
              >
            </Form.Field>
            <Form.Field>
              <Button onClick={this.onSubmit} type='submit'>Submit</Button>
              <Label>{this.state.message}</Label>
            </Form.Field>
          </Form>
        </Segment>
      </Container>
    );
  }

}

CreateDocument.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(CreateDocument);
