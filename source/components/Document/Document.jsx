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
      Icon
    } from 'semantic-ui-react'

import styles from './Document.scss'

class Document extends Component {
  constructor() {
    super()
  }

  render() {
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

    const answers = [
      { title: 'Answer-A', content: 'Answer A' },
      { title: 'Answer-B', content: 'Answer B' },
      { title: 'Answer-C', content: 'Answer C' },
      { title: 'Answer-D', content: 'Answer D' },
    ]
    const question = (
      <div>
        Sparse and Dense Graph
        <Accordion.Accordion panels={answers} />
      </div>
    )
    const subsection_0 = [
      { title: 'Graph density', content: { content: question, key: 'content-1' } },
    ]
    return (
      <Container className='Document' fluid>
        <Segment className='title' raised>
          <Header as='h1' textAlign='center'>
            CS 225 Spring 2014 Practice Final Exam
          </Header>
        </Segment>
        <Accordion defaultActiveIndex={0} panels={rootPanels} styled fluid/>
        <Accordion defaultActiveIndex={0} panels={subsection_0} styled fluid/>
      </Container>
    )
  }
}

export default Document
