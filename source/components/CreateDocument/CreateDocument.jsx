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
      Transition,
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
    this.handleFormSelection = this.handleFormSelection.bind(this);
    this.onMCChange = this.onMCChange.bind(this);
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

  onDataChange(event, index) {
    console.log(event.target.value);
    console.log(index);
    let items = this.state.data;
    items[index].content = event.target.value;
    this.setState({
      data: items
    });
  }

  onSubmit(event) {
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
        console.log('Submitted');
      }
      else if (response.status == 201) {
        this.setState({
          message: 'Created'
        });
        console.log("created");
      }
      else if (response.status == 500) {
        console.log('Server Error');
      }
      else if (response.status == 404) {
        console.log('404 Not Found');
      }
    }).catch((error) => {
      console.error(error);
    });
    // axios post
  }

  onAdd(event) {
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

  onSectionTitleChange(event, index) {
    let items = this.state.data;
    items[index].title = event.target.value;
    this.setState({
      data: items
    });
  }

  handleFormSelection(event, index, type) {
    let items = this.state.data;
    items[index].point = type;
    this.setState({
      data: items
    });
  }

  onMCChange(event, listIndex, index) {
    let items = this.state.data;
    items[listIndex].mc[index] = event.target.value;
    this.setState({
      data: items
    });
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
          <Form
            className='input-form'
            >
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
            {
              items.map((item, index) => {
                let item_content = (
                  <Form.Field
                    value={item.content}
                    onChange={(event) => this.onDataChange(event, index)}
                    label='Content'
                    control='textarea'
                    rows='4'
                    >
                  </Form.Field>
                );
                if (item.point === false) {
                  item_content = (
                    <Form.Group grouped>
                      <label>Multiple CHoice</label>
                      <Form.Field
                        className='item-mc'
                        >
                        <Input
                          label={<Label color='teal'>A</Label>}
                          className='item-mc-input'
                          value={item.mc[0]}
                          onChange={(event) => this.onMCChange(event, index, 0)}
                          placeholder='MC A'
                          />
                      </Form.Field>
                      <Form.Field
                        className='item-mc'
                        >
                        <Input
                          label={<Label color='green'>B</Label>}
                          className='item-mc-input'
                          value={item.mc[1]}
                          onChange={(event) => this.onMCChange(event, index, 1)}
                          placeholder='MC B'
                          />
                      </Form.Field>
                      <Form.Field
                        className='item-mc'
                        >
                        <Input
                          label={<Label color='olive'>C</Label>}
                          className='item-mc-input'
                          value={item.mc[2]}
                          onChange={(event) => this.onMCChange(event, index, 2)}
                          placeholder='User NetID'
                          placeholder='MC C'
                          />
                      </Form.Field>
                      <Form.Field
                        className='item-mc'
                        >
                        <Input
                          label='D'
                          label={<Label color='blue'>D</Label>}
                          className='item-mc-input'
                          value={item.mc[3]}
                          onChange={(event) => this.onMCChange(event, index, 3)}
                          placeholder='MC D'
                          />
                      </Form.Field>
                      <Form.Field
                        className='item-mc'
                        >
                        <Input
                          label={<Label color='purple'>E</Label>}
                          className='item-mc-input'
                          value={item.mc[4]}
                          onChange={(event) => this.onMCChange(event, index, 4)}
                          placeholder='MC E'
                          />
                      </Form.Field>
                    </Form.Group>
                  );
                }
                return (
                  <Form.Group
                    className='doc-item'
                    key={index}
                    grouped
                    >
                    <Form.Field>
                      <label>Point/Question</label>
                      <Input
                        value={item.title}
                        onChange={(event) => this.onSectionTitleChange(event, index)}
                        placeholder='Point/Question'
                        />
                    </Form.Field>
                    <Form.Group inline>
                      <label>Type: </label>
                      <Form.Field
                        control={Radio}
                        label='Point'
                        value="1"
                        checked={item.point === true}
                        onChange={(event) => this.handleFormSelection(event, index, true)}
                        />
                      <Form.Field
                        control={Radio}
                        label='Question'
                        value="2"
                        checked={item.point === false}
                        onChange={(event) => this.handleFormSelection(event, index, false)}
                        />
                    </Form.Group>
                    {item_content}
                  </Form.Group>
                );
              })
            }

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
