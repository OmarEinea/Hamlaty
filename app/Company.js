import { Component } from 'react';
import { Typography, Grid, Card, Tabs, Tab, Paper } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import companies from './companies.json';

export default class Home extends Component {
  state = {value: 0};
  render() {
    const company = companies[this.props.match.params.id];
    return (
      <div>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}}>
            <Grid item sm="12" style={{paddingBottom: 16}}>
              <Card style={{padding: 24}}>
                <Grid container>
                  <Grid item sm="2">
                    <div style={{width: 124, height: 124, backgroundImage: `url(https://placeimg.com/124/124/arch/${this.props.match.params.id})`}}/>
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
            </Grid>
            <Paper style={{flex: 1, marginBottom: -4}}>
              <Tabs
                value={this.state.value}
                onChange={(_, value) => {
                  this.setState({ value });
                }}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Package Offering" />
                <Tab label="Accommodation" />
                <Tab label="Transportation" />
                <Tab label="Top Reviews" />
              </Tabs>
            </Paper>
            <SwipeableViews style={{backgroundColor: 'white', width: '100%', zIndex: -1}}
              index={this.state.value}
              onChangeIndex={index => {
                this.setState({ value: index })
              }}
            >
              <Typography component="div" style={{ padding: 8 * 3 }}>
                <ul>
                  <li>Arrange accommodation at reduced price in 5-star, 4-star and 3-star hotels close to the Haram al-Sharif and the city</li>
                  <li>Special services for business executives and VIP customers</li>
                  <li>Airport meet and assist services at discounted prices on request</li>
                  <li>Booking air and land transportation</li>
                  <li>Provision of guides for pilgrims during the performance of religious rites and rituals</li>
                  <li>Provision of convenient transportation services to all places of ritual</li>
                  <li>Provision of trips to Islamic and historic sites upon request</li>
                  <li>Provision of medical services during the trips</li>
                  <li>Insurance for students and companies</li>
                  <li>Special rates for groups, companies and hospitals</li>
                </ul>
              </Typography>
              <Typography component="div" style={{ padding: 8 * 3 }}>
                <ul>
                  <li>Buildings: Al Kaif Building</li>
                  <li>Free wifi available</li>
                  <li>Room Types: 4 beds, 2 beds & Single bed</li>
                </ul>
                <img style={{maxWidth: '100%'}} src="hotel.jpg"/>
              </Typography>
              <Typography component="div" style={{ padding: 8 * 3 }}>
                <b>Buses</b>
                <img style={{maxWidth: '100%'}} src="bus.png"/>
              </Typography>
              <Typography component="div" style={{ padding: 8 * 3 }}>
                <div style={{padding: 24, borderBottom: 'solid lightgrey 1px', borderTop: 'solid lightgrey 1px'}}>
                  <Grid container>
                    <Grid item sm="2">
                      <div style={{width: 124, height: 124, backgroundImage: 'url(1.jpg)'}}/>
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
                </div>
                <div style={{padding: 24, borderBottom: 'solid lightgrey 1px'}}>
                  <Grid container>
                    <Grid item sm="2">
                      <div style={{width: 124, height: 124, backgroundImage: 'url(2.jpg)'}}/>
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
                </div>
                <div style={{padding: 24, borderBottom: 'solid lightgrey 1px'}}>
                  <Grid container>
                    <Grid item sm="2">
                      <div style={{width: 124, height: 124, backgroundImage: 'url(3.jpg)'}}/>
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
                </div>
              </Typography>
            </SwipeableViews>
          </Grid>
        </Grid>
      </div>
    );
  }
}
