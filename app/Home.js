import { Component } from 'react';
import { Typography, Grid, Card, Input } from 'material-ui';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <div style={{width: '100%', height: 400,
          background: 'url(https://pixabay.com/get/ef33b8072de91c66d95d4404e445468be272e1d618b518459cf0/mecca-66985.jpg)',
          backgroundSize: 'cover',
          backgroundPositionY: '80%',
          zIndex: -1}}/>
        <Card style={{position: 'absolute', left: '40%', top: 200, padding: '8px 16px'}}>
          <Grid container alignItems="flex-end">
            <Grid item>
              <i class="fas fa-search" style={{margin: '0 8px 8px 0'}}></i>
            </Grid>
            <Grid item>
              <Input placeholder="Search for a caravan" />
            </Grid>
          </Grid>
        </Card>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}} class="white">
            <Grid item sm="4" style={{padding: 16}}>
              <Link to="company">
                <Card style={{padding: 24, backgroundColor: '#66BB6A'}}>
                  <Typography variant="title">Top Rated Caravan</Typography>
                </Card>
              </Link>
            </Grid>
            <Grid item sm="4" style={{padding: 16}}>
              <Card style={{padding: 24, backgroundColor: '#42A5F5'}}>
                <Typography variant="title">Latest Review</Typography>
              </Card>
            </Grid>
            <Grid item sm="4" style={{padding: 16}}>
              <Card style={{padding: 24, backgroundColor: '#EF5350'}}>
                <Typography variant="title">Booking Deadlines</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
