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

import styles from './CreateDocument.scss'

class CreateDocument extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user: '',
      data: '',
    };

    this.isLogin = false;

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { cookies } = this.props;

    let user_netid = cookies.get('name');
    if (this.netid) {
      this.isLogin = true;
      this.setState({
        user: user_netid
      });
    } else {
      this.isLogin = false;
    }
  }

  onUserChange(event) {
    this.setState({
      user: event.target.value
    });
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  onDataChange(event) {
    let curr_data = this.state.data;
    this.setState({
      data: event.target.value
    });
  }

  onSubmit(event) {
    console.log(this.state.data);
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
              <input placeholder='Document Name' />
            </Form.Field>
            <Form.Field>
              <label>Owner/Netid</label>
              <Input
                value={this.state.user}
                placeholder='User NetID'
                />
            </Form.Field>
            <Form.Field
              value={this.state.data}
              onChange={this.onDataChange}
              label='Content'
              control='textarea'
              rows='3'
              >
            </Form.Field>

            <Button onClick={this.onSubmit} type='submit'>Submit</Button>
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
