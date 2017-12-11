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
      Dropdown,
      Radio,
      Select
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
      message: '',
      data: [],
      dataForm: [],
    };

    this.isLogin = false;

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onSectionTitleChange = this.onSectionTitleChange.bind(this);
    this.onSectionContentChange = this.onSectionContentChange.bind(this);
    this.handleFormSelection = this.handleFormSelection.bind(this);
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

    let items = this.state.data;
    let first_item = {
      title: '',
      point: true,
      content: '',
      mc: ['', '', '', '', '']
    }
    items.push(first_item);
    this.setState({
      data: items
    });
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
    if (this.state.title === '' && this.state.data === '') {
      this.setState({
        message: 'Invalid Submission'
      });
      return;
    }
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

  onAdd(event) {

  }

  onSectionTitleChange(event) {

  }

  onSectionContentChange(event) {

  }

  handleFormSelection(event) {

  }

  render() {
    let msg_label = {};
    if (this.state.message === '') {
      msg_label = (
        <span></span>
      );
    } else {
      msg_label = (
        <Label>{this.state.message}</Label>
      );
    }

    let items = this.state.data;

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
            <Form.Group
              className='doc-item'
              grouped
              >
              <Form.Field>
                <label>Item Name</label>
                <Input
                  value={this.state.user}
                  onChange={this.onUserChange}
                  placeholder='Point/Question'
                  />
              </Form.Field>
              <Form.Group inline>
                <label>Type: </label>
                <Form.Field
                  control={Radio}
                  label='Point'
                  value='1'
                  checked={'1' === '1'}
                  onChange={this.handleFormSelection}
                  />
                <Form.Field
                  control={Radio}
                  label='Question'
                  value='2'
                  checked={'2' === '1'}
                  onChange={this.handleFormSelection}
                  />
              </Form.Group>
              <Form.Field
                value={this.state.data}
                onChange={this.onDataChange}
                label='Content'
                control='textarea'
                rows='5'
                >
              </Form.Field>
            </Form.Group>

            <Form.Field>
              <Button
                onClick={this.onSubmit}
                type='submit'
                color='green'
                >
                Submit
              </Button>
              {msg_label}
              <Button
                onClick={this.onAdd}
                type='submit'
                floated='right'
                color='orange'
                >
                Add More Item
              </Button>
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
