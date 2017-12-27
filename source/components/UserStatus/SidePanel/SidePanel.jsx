import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import AddCircle from 'material-ui-icons/AddCircle';
import AddIcon from 'material-ui-icons/Add';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './SidePanel.scss'

class SidePanel extends Component {
  constructor() {
    super()
    let goalList = [];
    goalList.push({
      name: "Finish an AI project",
      status: false,
    });
    goalList.push({
      name: "Build a garbage website",
      status: true,
    });
    this.state = {
      goalList: goalList
    };

    this.number = 1;
    this.flag = true;

    this.onGoalChange = this.onGoalChange.bind(this);
    this.handleGoalAdd = this.handleGoalAdd.bind(this);
  }

  handleGoalAdd() {
    const list = this.state.goalList.concat([
      {
        name: "Add number : " + this.number,
        status: this.flag,
      }
    ]);
    this.number = this.number + 1;
    this.flag = !this.flag;
    this.setState({
      goalList: list
    });
  }

  onGoalChange(index) {
    console.log('gonal on Click');
    console.log(event.target.id);
    let goal_list = this.state.goalList;
    // goal_list[i].status = !goal_list[i].status;
    goal_list.splice(index, 1);
    requestAnimationFrame(() => {
      this.setState({
        goalList: goal_list
      });
    });
    return;
  }

  render() {
    let goalList = this.state.goalList;
    return (
      <Grid
        className="SidePanel"
        xs={12}
        sm={12}
        md={3}
        item>
        <Card className='side-item card-progress'>
          <ListSubheader>Nested List Items</ListSubheader>
          <LinearProgress
            className='progress-bar'
            mode="determinate" value={68} />
          <Typography type="headline" component="h2">
            68%
          </Typography>
        </Card>
        <Paper className='side-item sideProgress'>
          <LinearProgress mode="determinate" value={68} />
          <Avatar className='orangeAvatar'>68%</Avatar>
        </Paper>
        <Card className='side-item goal-board'>
          <Typography type="title" className='section-title'>
            Semester Goals
            <Button
              fab
              mini
              color="accent"
              aria-label="add"
              onClick={this.handleGoalAdd}
              className='goal-item-add-btn'>
              <AddIcon />
            </Button>
          </Typography>
          <CSSTransitionGroup
            className='goalList'
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}>
            {
              goalList.map((goal, index) => {
                let statusClass = goal.status === true ? 'finish' : 'in-progress';
                let statusLabel = goal.status === true ? 'F' : 'IP';
                return (
                  <ListItem
                    id={goal.name}
                    className={'goal show ' + statusClass}
                    onClick={() => this.onGoalChange(index)}
                    key={goal.name}
                    button
                    >
                    {goal.name}
                    <Chip label={statusLabel} className='goalStatusChip' />
                  </ListItem>
                );
              })
            }
          </CSSTransitionGroup>
        </Card>
        <Card
          className='planCurrent'>
          <CardMedia
            className='planImg'
            image="/assets/planImg0.png"
            title="Contemplative Reptile"
            />
          <CardContent>
            <Typography type="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              Share
            </Button>
            <Button dense color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default SidePanel
