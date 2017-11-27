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
import hljs from 'highlight.js'

import styles from './Document.scss'

class Document extends Component {
  constructor() {
    super()
    hljs.initHighlightingOnLoad()
  }

  render() {
    const options = [
      { key: 'a', text: 'Student Answer: So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing.', value: 'a' },
      { key: 'b', text: 'Student Answer: Allow miles wound place the leave had. To sitting subject no improve studied limited.', value: 'b' },
      { key: 'c', text: 'Student Answer: Uneasy barton seeing remark happen his has.', value: 'c' },
      { key: 'd', text: 'TA answer: Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.', value: 'd' },
      { key: 'e', text: 'Student Answer: impossible appearance considered mr. Mrs him left find are good.', value: 'e' },
    ]
    const level2Panels = [
      { title: 'Explaination 1', content: 'Answer A' },
      { title: 'Explaination 2', content: 'Answer B' },
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
      { title: 'TA', content: 'Answer A' },
      { title: 'Student 1', content: 'Answer B' },
      { title: 'Student 2', content: 'Answer C' },
      { title: 'Student 3', content: 'Answer D' },
    ]
    const explain = [
      { key: 'a', text: 'Student: So direction so sweetness or extremity at daughters. Provided put unpacked now but bringing.', value: 'a' },
      { key: 'b', text: 'Student: Allow miles wound place the leave had. To sitting subject no improve studied limited.', value: 'b' },
      { key: 'c', text: 'Student: Uneasy barton seeing remark happen his has.', value: 'c' },
      { key: 'd', text: 'TA: Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.', value: 'd' },
      { key: 'e', text: 'Student: impossible appearance considered mr. Mrs him left find are good.', value: 'e' },
    ]
    const question = (
      <div>
        <Accordion.Accordion panels={answers} />
      </div>
    )
    const subsection_0 = [
      { title: 'Linear Regression', content: { content: question, key: 'Answer A' } },
    ]

    const code_block_0 = "void fac2(int x) { x = 2*x; }"
    const code_block_1 = "void fac3(int * x) { *x = 3 * (*x); }"
    const code_block_2 = "void fac5(int & x) { x = 5*x; }"
    const code_block_3 = "int main() {"
    const code_block_4 = "    int z = 1;"
    const code_block_5 = "fac2(z); fac3(&z);"
    const code_block_6 = "fac5(z);"
    const code_block_7 = "cout << z << endl;"
    const code_block_9 = "return 0;"
    const code_block_10 = "}"
    let code_func = [
      "int main() {",
      "    int z = 1;",
      "fac2(z); fac3(&z);",
      "fac5(z);",
      "cout << z << endl;",
      "return 0;",
      "}"
    ]
    return (
      <Container className='Document' text>
        <Segment className='title' raised>
          <Grid columns={2}>
            <Grid.Column width={4} verticalAlign='middle'>
              <Link to='/'><Button>Back</Button></Link>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h1' textAlign='center'>
                CS 225 Spring 2014 Practice Final Exam
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
        <Accordion size='large' defaultActiveIndex={0} panels={subsection_0} styled fluid/>
        <Segment>
          <Header size='medium' dividing>MC5</Header>
          <Grid columns={2}>
            <Grid.Column>
              <Segment>
                {code_block_0}
                <br/>
                {code_block_1}
                <br/>
                {code_block_2}
                <br/>
                <br/>
                {
                  code_func.map((line) => {
                    return (
                      <div>
                        <p>{line}</p>
                      </div>
                    )
                  })
                }
                <br/>
                What is the result of compiling and executing this code (assume iostream is included)?
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Table className='mc-answer-box'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>A</Table.Cell>
                    <Table.Cell>6 is sent to standard out.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>B</Table.Cell>
                    <Table.Cell>10 is sent to standard out.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>C</Table.Cell>
                    <Table.Cell>15 is sent to standard out.</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>D</Table.Cell>
                    <Table.Cell className='mc-answer'>
                      30 is sent to standard out.
                      <Label
                        className='mc-answer-tag'
                        position='right'
                        color='blue'
                        pointing='left'
                        horizontal>10%</Label>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>E</Table.Cell>
                    <Table.Cell>
                      None of these options is correct.
                      <Label
                        className='mc-answer-tag'
                        position='right'
                        color='pink'
                        pointing='left'
                        horizontal>52%</Label>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
          <Header as='h5' attached='top'>
            Answer
          </Header>
          <Segment attached>
            <Dropdown upward floating inline options={options} defaultValue='d'/>
          </Segment>
        </Segment>
      </Container>
    )
  }
}

export default Document
