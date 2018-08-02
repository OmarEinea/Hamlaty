import { Component } from 'react';
import { Typography, Grid, Card, Tabs, Tab, Paper } from 'material-ui';
import { Link } from 'react-router-dom';
import companies from './companies.json';

export default class Home extends Component {
  state = {value: 0};
  componentWillMount() {
    this.companies = Object.entries(companies).slice(0, 10).sort((a, b) => b[1].rating - a[1].rating);
  }

  render() {
    return (
      <Grid container justify="center" >
      <Grid container style={{maxWidth: 960, padding: 24}}>
      <Card style={{marginBottom: 24, padding: 24}}>
        <Grid container>
          <Grid item sm="2">
            <div style={{width: 124, height: 124, backgroundImage: 'url(https://placeimg.com/124/124/people/1)'}}/>
          </Grid>
          <Grid item sm="8">
            <Typography variant="headline">Ahmed Khalid</Typography>
            <Typography variant="subheading">The overall support and guidance from the service agent was amazing.
From day 01 till the end he guided and taught us. Everything was provided as shown in pictures. 
The Hotel staff and bus staff was friendly too.
</Typography>
          </Grid>
          <Grid item sm="2">
            <Typography variant="headline">Rating 4/5</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{marginBottom: 24, padding: 24}}>
        <Grid container>
          <Grid item sm="2">
            <div style={{width: 124, height: 124, backgroundImage: 'url(https://placeimg.com/124/124/people/2)'}}/>
          </Grid>
          <Grid item sm="8">
            <Typography variant="headline">Mansoor Ali</Typography>
            <Typography variant="subheading">Did not really like the hotel arrangement as i had olderly people with me. I had asked well in 
advance to get me a room thats easily accessible. But i was given a room on the 8th floor. Buses service
is appreciateable. Would have given 4 stars if accomodation was arranged as asked.
</Typography>
          </Grid>
          <Grid item sm="2">
            <Typography variant="headline">Rating 2.5/5</Typography>
          </Grid>
        </Grid>
      </Card>
      <Card style={{padding: 24, marginBottom: 24}}>
        <Grid container>
          <Grid item sm="2">
            <div style={{width: 124, height: 124, backgroundImage: 'url(https://placeimg.com/124/124/people/3)'}}/>
          </Grid>
          <Grid item sm="8">
            <Typography variant="headline">Yousuf Al Mazmi</Typography>
            <Typography variant="subheading">Not a great experience. Hotel room was not provided as promised. I has paid for a single room 
but was given a double room due to availablity. Poor management by the company. Also the tents weren't 
as good as promised.</Typography>
          </Grid>
          <Grid item sm="2">
            <Typography variant="headline">Rating 1/5</Typography>
          </Grid>
        </Grid>
      </Card>
      </Grid>
      </Grid>
    );
  }
}
