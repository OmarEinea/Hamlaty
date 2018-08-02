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
      <div>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}}>
            <Grid item sm="12" style={{paddingBottom: 16}}>
              {this.companies.map(([key, company]) =>
                <Link to={'/company/' + key} style={{textDecoration: 'unset'}}>
                  <Card style={{padding: 24, margin: 16}}>
                    <Grid container>
                      <Grid item sm="2">
                        <div style={{width: 124, height: 124, backgroundImage: `url(https://placeimg.com/124/124/arch/${key})`}}/>
                      </Grid>
                      <Grid item sm="8">
                        <Typography variant="headline">{company.name}</Typography>
                        <Typography variant="subheading"><b class="grey"><i class="fas fa-fw fa-user"></i> Manager:</b> {company.manager}</Typography>
                        <Typography variant="subheading"><b class="grey"><i class="fas fa-fw fa-map-marker"></i> City:</b> {company.city}</Typography>
                        <Typography variant="subheading"><b class="grey"><i class="fas fa-fw fa-phone"></i> Phone:</b> {company.tel}</Typography>
                        <Typography variant="subheading"><b class="grey"><i class="fas fa-fw fa-envelope"></i> Email:</b> {company.email}</Typography>
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
