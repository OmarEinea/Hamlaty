import { Component } from 'react';
import { Typography, Grid, Card, Tabs, Tab, Paper } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

export default class Home extends Component {
  state = {value: 0};
  render() {
    return (
      <div>
        <div style={{height: 400, backgroundColor: 'lightgrey'}}/>
        <Grid container justify="center">
          <Grid container style={{maxWidth: 1024, padding: 24}}>
            <Grid item sm="12" style={{paddingBottom: 16}}>
              <Card style={{padding: 24}}>
                <Grid container>
                  <Grid item sm="10">
                    <Typography variant="headline">Company Name</Typography>
                  </Grid>
                  <Grid item sm="2">
                    <Typography variant="headline">Rating 4/5</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Paper style={{flex: 1, marginBottom: 8}}>
              <Tabs
                value={this.state.value}
                onChange={(_, value) => {
                  this.setState({ value });
                }}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item four" />
                <Tab label="Item five" />
              </Tabs>
            </Paper>
            <SwipeableViews style={{backgroundColor: 'white', width: '100%'}}
              index={this.state.value}
              onChangeIndex={index => {
                this.setState({ value: index })
              }}
            >
              <Typography component="div" style={{ padding: 8 * 3 }}>
                Item one
              </Typography>
              <Typography component="div" style={{ padding: 8 * 3 }}>
                Item two
              </Typography>
              <Typography component="div" style={{ padding: 8 * 3 }}>
                Item three
              </Typography>
            </SwipeableViews>
          </Grid>
        </Grid>
      </div>
    );
  }
}
