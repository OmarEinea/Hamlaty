import { Component } from 'react';
import { Typography, Grid, Card, Input } from 'material-ui';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <div style={{width: '100%', height: 550,
          background: 'url(mecca.jpg)',
          backgroundSize: 'cover',
          backgroundPositionY: '80%',
          zIndex: -1}}/>
        <Grid container direction="column" justify="center" alignItems="center" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 80}}>
          <img src="logo.png" width="150" height="200" />
          <Typography variant="display1" style={{fontSize: 24, padding: 24, color: '#fafafa'}}>
          
            &nbsp;&nbsp;&nbsp;A booking and rating system for Hajj caravans that
            <br/>
            encourages transparency of their offerings for pilgrims.
          </Typography>
          <Card style={{opacity: .7, padding: '8px 16px', width: 220}}>
            <Grid container alignItems="flex-end">
              <Grid item>
                <i class="fas fa-search" style={{margin: '0 8px 8px 0'}}></i>
              </Grid>
              <Grid item>
                <Input placeholder="Search for a caravan" />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid container justify="center">
          <Grid container justify="space-evenly" style={{maxWidth: 1024, padding: 24}}>
            <Grid item sm="3" style={{padding: 16}}>
              <Link to="company" style={{textDecoration: 'none'}}>
                <Grid container justify="center" alignItems="center" class="round">
                  <i class="fas fa-trophy" style={{fontSize: 100}}></i>
                </Grid>
                <Typography align="center" variant="headline" style={{padding: 24}}>
                  Top Rated Caravan
                </Typography>
              </Link>
            </Grid>
            <Grid item sm="3" style={{padding: 16}}>
              <Link to="reviews" style={{textDecoration: 'none'}}>
                <Grid container justify="center" alignItems="center" class="round">
                  <i class="fas fa-pen" style={{fontSize: 100}}></i>
                </Grid>
                <Typography align="center" variant="headline" style={{padding: 24}}>
                  Latest Reviews
                </Typography>
              </Link>
            </Grid>
            <Grid item sm="3" style={{padding: 16}}>
              <Link to="company" style={{textDecoration: 'none'}}>
                <Grid container justify="center" alignItems="center" class="round">
                  <i class="fas fa-stopwatch" style={{fontSize: 100}}></i>
                </Grid>
                <Typography align="center" variant="headline" style={{padding: 24}}>
                  Booking Deadlines
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
