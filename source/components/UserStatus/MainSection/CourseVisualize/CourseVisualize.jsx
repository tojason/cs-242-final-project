import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import styles from './CourseVisualize.scss'

const style = theme => ({
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CourseVisualize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Paper className='CourseVisualize'>
        <Typography type="title" className='section-title'>
          Course Track
        </Typography>
        <Grid className='class-tree' container spacing={24}>
          <Grid className='course-level' item xs={12}>
            <div className='course-item'>
              <div className='course' >
                <div className='course-icon-wrap'>
                  <img src='/assets/calculator.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course'>
                <div className='course-icon-wrap'>
                  <img src='/assets/database.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
          </Grid>
          <Grid className='course-level' item xs={12}>
            <div className='course-item'>
              <div className='course'>
                <div className='course-icon-wrap'>
                  <img src='/assets/database.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
          </Grid>
          <Grid className='course-level' item xs={12}>
            <div className='course-item'>
              <div className='course' >
                <div className='course-icon-wrap'>
                  <img src='/assets/calculator.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course'>
                <div className='course-icon-wrap'>
                  <img src='/assets/database.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course'>
                <div className='course-icon-wrap'>
                  <img src='/assets/database.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course' >
                <div className='course-icon-wrap'>
                  <img src='/assets/calculator.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
          </Grid>
          <Grid className='course-level' item xs={12}>
            <div className='course-item'>
              <div className='course' >
                <div className='course-icon-wrap'>
                  <img src='/assets/calculator.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course'>
                <div className='course-icon-wrap'>
                  <img src='/assets/database.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class B
                    </div>
                    <div className="gpa back">
                      GPA 3.24
                    </div>
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
            <div className='course-item'>
              <div className='course' >
                <div className='course-icon-wrap'>
                  <img src='/assets/calculator.png' />
                </div>
                <div className="flip-horizontal">
                  <div className="flipper flipper-flip-horizontal">
                    <div className="course-name front">
                      Class Popular
                    </div>
                    <div className="gpa back">
                      GPA N/A
                    </div>
                  </div>
                  <div className='popular-icon'>
                    <img src='/assets/popular-low.png' />
                  </div>
                </div>
              </div>
              <div className='hr-line' />
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(style)(CourseVisualize);
