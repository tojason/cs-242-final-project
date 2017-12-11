import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
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
      Icon
    } from 'semantic-ui-react'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import styles from './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'overview',
      activeIndex: 0,
      message: 'user'
    };

    this.isLogin = false;

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    this.handleItemClick = this.handleItemClick.bind(this);

    this.handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    };
    this.handleClick = this.handleClick.bind(this);

    this.onLogOut = this.onLogOut.bind(this);
  }

  componentWillMount() {
    const { cookies } = this.props;

    let user_netid = cookies.get('name');
    if (user_netid) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  onLogOut() {
    this.isLogin = false;
    this.props.cookies.remove('name');
    this.setState({
      message: 'No User'
    });
  }

  render() {

    let user_btn = (
      <Link to='/LogIn'>
        <Button color='vk'>Log In</Button>
      </Link>
    );

    if (this.isLogin) {
      user_btn = (
        <Link to='/'>
          <Button
            onClick={this.onLogOut}
            color='vk'
            >Log Out</Button>
        </Link>
      );
    }

    const level2Panels = [
      { title: 'Answer-A', content: 'Answer A' },
      { title: 'Answer-B', content: 'Answer B' },
    ]

    const Level2Content = (
      <div>
        Binary Search is blahblah.
        <Accordion.Accordion panels={level2Panels} />
      </div>
    )

    const rootPanels = [
      { title: 'Binary Search', content: { content: Level2Content, key: 'content-2' } },
    ]
    const { activeItem, activeIndex } = this.state

    return(
      <Container className='Home'>
        <Header as='h1'color='blue' textAlign='center'>
          UIUC Course Center
        </Header>
        <Menu size='large'>
          <Menu.Item
            name='overview'
            active={activeItem === 'overview'}
            onClick={this.handleItemClick}
            >
            Course Overview
          </Menu.Item>
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
            >
            Practice Exam
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon={'search'} placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
              {user_btn}
              <Link to='/SignUp'>
                <Button color='google plus'>Sign Up</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid columns='equal'>
          <Grid.Column width={10}>
            <Header as='h3' attached='top'>
              CS 125 Intro to Computer Science
            </Header>
            <Segment attached>
              <List verticalAlign='middle' bulleted>
                <List.Item>Basic computer program architecture</List.Item>
                <List.Item>Java workflow from code to CPU</List.Item>
                <List.Item>OOP in Java</List.Item>
                <List.Item>
                  Data Structure
                  <List.List>
                    <List.Item>Array</List.Item>
                    <List.Item>Linked List</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  Recursion (Big Topic)
                  <List.List>
                    <List.Item>Solve a maze</List.Item>
                    <List.Item>Traverse Linked List</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>
                  Sorting
                  <List.List>
                    <List.Item>Insertion Sort</List.Item>
                    <List.Item>Selection Sort</List.Item>
                    <List.Item>Merge Sort</List.Item>
                    <List.Item>Quick Sort</List.Item>
                  </List.List>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' attached='top'>
              CS 173 Discrete Structures
            </Header>
            <Segment attached>
              <List verticalAlign='middle' bulleted>
                <List.Item>
                  Sorting
                  <List.List>
                    <List.Item>This course is an introduction to the theoretical side of computer science.</List.Item>
                    <List.Item>In it, you will learn how to construct proofs, as well as read and write literate formal mathematics.</List.Item>
                    <List.Item>You will also get a quick introduction to key theory topics, particularly analysis of algorithm running times. And you will also become familiar with a range of standard mathematics concepts commonly used in computer science.</List.Item>
                  </List.List>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>CS 210</Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment>CS 225</Segment>
          </Grid.Column>
        </Grid>
        <Grid columns='equal'>
          <Grid.Column width={7}>
            <Segment>CS 233</Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Header as='h3' attached='top'>
              CS 241 System Programming
            </Header>
            <Segment attached>
              <List verticalAlign='middle' bulleted>
                <List.Item>In depth in C language</List.Item>
                <List.Item>C program that use system interfaces provided by UNIX</List.Item>
                <List.Item>
                  Read and write to file using I/O on UNIX
                </List.Item>
                <List.Item>
                  Networking
                  <List.List>
                    <List.Item>TCP/IP</List.Item>
                    <List.Item>UDP</List.Item>
                    <List.Item>Socket</List.Item>
                    <List.Item>Handshake</List.Item>
                  </List.List>
                </List.Item>
                <List.Item>Memory</List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider />
        <Header as='h1'>Course Notes</Header>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Link to='/Document'>
                <Header as='h3' dividing>
                  CS 225 Spring 2014 Final Exam
                </Header>
              </Link>
              <List celled bulleted>
                <List.Item>Cats</List.Item>
                <List.Item>Horses</List.Item>
                <List.Item>Dogs
                  <List.List>
                    <List.Item>Labradoodles</List.Item>
                    <List.Item>Shiba Inu</List.Item>
                    <List.Item>Mastiff</List.Item>
                  </List.List>
                </List.Item>
              </List>
              <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  What is the difference between array and linked list?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
                    {' '}welcome guest in many households across the world.
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  What is the advantage linked list over array?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>
                    There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
                    {' '}dog that they find to be compatible with their own lifestyle and desires from a companion.
                  </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  What is big the big three we learn in class?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                    Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
                  </p>
                  <p>
                    A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
                    {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
                    {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3' dividing>
                CS 241 Fall 2016 Final Study Guide
              </Header>
              <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment textAlign='center'>
          Footer
          <br/>
          Reference: useful links
        </Segment>
      </Container>
    )
  }
}

Home.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Home);
