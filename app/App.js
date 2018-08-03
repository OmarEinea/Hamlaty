import { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from 'material-ui';
import Home from './Home';
import Company from './Company';
import Reviews from './Reviews';
import TopCompanies from './TopCompanies';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" class="black" style={{backgroundColor: '#9E9D24', boxShadow: 'unset'}}>
          <Toolbar>
            <Grid container justify="center">
              <Grid container style={{maxWidth: 960}}>
                <Typography variant="title" color="inherit" style={{flex: 1, fontFamily: 'Baloo Bhaijaan'}}>
                  <Link to="/" style={{lineHeight: '32px', fontSize: '26px'}}>Hamlaty</Link>
                </Typography>
                <Button color="inherit" style={{border: 'solid black 1px', marginRight: 8}}><b>Login</b></Button>
                <Button color="inherit" style={{border: 'solid black 1px'}}><b>Signup</b></Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={Home}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route exact path="/company" component={TopCompanies}/>
        <Route path="/company/:id" component={Company}/>
        <Grid container justify="center" style={{backgroundColor: '#90A4AE'}}>
          <Grid container style={{maxWidth: 1024}} class="white">
            <Grid item sm="6" style={{padding: 16}}>
              <Typography variant="subheading">Hajj Hackathon Project. Jeddah, KSA.</Typography>
            </Grid>
            <Grid item sm="6" style={{padding: 16}}>
              <Typography align="right" variant="subheading">2018 © Team Hamlaty</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<HashRouter><App/></HashRouter>, document.body);
