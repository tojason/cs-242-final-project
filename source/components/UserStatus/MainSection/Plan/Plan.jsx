import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Chip from 'material-ui/Chip';

import styles from './Plan.scss'

class Plan extends Component {
  constructor() {
    super();

    // temp usage
    let course_list = []
    course_list.push({
      semester: 'Spring 2018',
      courses: [
        'CS 374',
        'CS 440',
        'CS 412'
      ]
    });
    course_list.push({
      semester: 'Fall 2018',
      courses: [
        'CS 374',
        'CS 412'
      ]
    });

    this.state = {
      planList: course_list
    };
  }

  render() {
    let planList = this.state.planList;

    return (
      <Paper className='Plan'>
        <Typography type="title" className='section-title'>
          Plans
        </Typography>
        <List className='plan-list'>
          {
            planList.map((semester) => {
              return (
                <ListItem
                  className='plan-item'
                  key={semester.semester}
                  button>
                  <List className='plan-course-list'>
                    {
                      semester.courses.map((course) => {
                        return (
                          <ListItem
                            className='plan-course'
                            key={course}
                            >
                            <Chip
                              label={course}
                              className='plan-course-chip'
                              />
                          </ListItem>
                        );
                      })
                    }
                  </List>
                  <Chip
                    label={semester.semester}
                    className='plan-semester-chip'
                    />
                </ListItem>
              );
            })
          }
        </List>
      </Paper>
    );
  }
}

export default Plan
