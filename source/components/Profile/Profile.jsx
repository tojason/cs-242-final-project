import React, { Component } from 'react';
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
      Card,
      Icon,
    } from 'semantic-ui-react';
import axios from 'axios'; // api
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import styles from './Profile.scss';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      netid: '',
    };

    this.netid = '';
    this.isLogin = false;

    this.handleExamChange = this.handleExamChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
  }

  componentWillMount() {
    const { cookies } = this.props;

    this.netid = cookies.get('name');
    if (this.netid) {
      this.isLogin = true;
      this.netid = this.netid;
    }
  }

  handleCourseChange(event) {

  }

  handleExamChange(event) {

  }

  render() {
    const extra = (
      <p>
        <Icon name='bar chart' />
        16 Courses
      </p>
    )
    let avatar_url = "/assets/avatar-1.svg";
    let name = 'Sample User 1';
    let major = 'Computer Science';
    let description = 'User 1 is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.';
    return (
      <Container className='Profile'>
        <Header as='h1'
          color='blue'
          textAlign='center'
          block
          >
          <Link to='/'>
            <Button
              basic
              color='red'
              floated='left'
              >
              Back
            </Button>
          </Link>
          UIUC Course Reviews
        </Header>
        <Grid>
          <Grid.Column
            width={4}
            >
            <Card
              image={avatar_url}
              header={name}
              meta={major}
              description={description}
              extra={extra}
              />
          </Grid.Column>
          <Grid.Column
            floated='right'
            width={12}
            >
            <Segment>
              <Button
                basic
                color='red'
                size='tiny'
                >
                CS 440
              </Button>
              <Button
                basic
                color='orange'
                size='tiny'
                >
                CS 225
              </Button>
              <Button
                basic
                color='yellow'
                size='tiny'
                >
                CS 125
              </Button>
            </Segment>
            <Header as='h3' attached='top'>
              Course Note
            </Header>
            <Segment attached>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Segment>
            <Header as='h3' attached='top'>
              Practice Exam
            </Header>
            <Segment attached>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

Profile.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Profile);
