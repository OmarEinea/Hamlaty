import { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Typography, Button, Grid, Input, Card } from 'material-ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flex: 1, fontFamily: 'Baloo Bhaijaan'}}>
              حـمـلـتـي
            </Typography>
            <Grid container alignItems="flex-end">
              <Grid item>
                <i class="fas fa-search" style={{margin: '0 8px 8px 48px'}}></i>
              </Grid>
              <Grid item>
                <Input style={{color: 'white'}} placeholder="Search for a caravan" />
              </Grid>
            </Grid>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
        <div style={{height: 400, backgroundColor: 'lightgrey'}}/>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}} class="white">
            <Grid item sm="4" style={{padding: 16}}>
              <Card style={{padding: 24, backgroundColor: '#66BB6A'}}>
                <Typography variant="title">Top Rated Caravan</Typography>
              </Card>
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
        <Grid container justify="center" style={{backgroundColor: '#90A4AE'}}>
          <Grid container style={{maxWidth: 1024}} class="white">
            <Grid item sm="4" style={{padding: 16}}>
              <Typography variant="subheading">Hajj Hackathon</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.body);
