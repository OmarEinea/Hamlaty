import { Component } from 'react';
import { Typography, Grid, Card, Tabs, Tab, Paper } from 'material-ui';
import { Link } from 'react-router-dom';
import companies from './companies.json';

export default class Home extends Component {
  state = {value: 0};
  componentWillMount() {
    this.companies = Object.entries(companies).sort((a, b) => b[1].rating - a[1].rating);
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}}>
            <Grid item sm="12" style={{paddingBottom: 16}}>
              {this.companies.map(([key, company]) =>
                <Link to={'company/' + key} style={{textDecoration: 'unset'}}>
                  <Card style={{padding: 24, margin: 16}}>
                    <Grid container>
                      <Grid item sm="2">
                        <div style={{width: 124, height: 124, backgroundColor: 'lightgrey'}}/>
                      </Grid>
                      <Grid item sm="8">
                        <Typography variant="headline">{company.name}</Typography>
                        <Typography variant="subheading"><b>Manager:</b> {company.manager}</Typography>
                        <Typography variant="subheading"><b>City:</b> {company.city}</Typography>
                        <Typography variant="subheading"><b>Phone:</b> {company.tel}</Typography>
                        <Typography variant="subheading"><b>Email:</b> {company.email}</Typography>
                      </Grid>
                      <Grid item sm="2">
                        <Typography variant="headline">Rating {company.rating}/5</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Link>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
