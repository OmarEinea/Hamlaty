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
            <Typography variant="title" color="inherit" style={{flex: 1, fontFamily: 'Baloo Bhaijaan'}}>
              <Link to="/">حـمـلـتـي</Link>
            </Typography>
            <Button color="inherit"><b>Login</b></Button>
            <Button color="inherit"><b>Signup</b></Button>
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
