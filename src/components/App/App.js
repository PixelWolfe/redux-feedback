import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './App.css';
import {Grid} from '@material-ui/core';

import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support';
import FeedbackStepper from '../Stepper/Stepper';

class App extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
         <Header/>
        </Grid>
        <br></br>
        
        <Grid>
          <FeedbackStepper/>
        </Grid>

        {/*Main Body */}
        <Grid item container>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <Grid container spacing={4} justify='center'>
              <Grid item xs={12} sm={10} md={8} lg={6} >
               
                <Feeling/>
                <br></br>
                <Support/>
                <br></br>
                <Understanding/>
                <br></br>
                <Comments/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>    
        <Grid item xs={1}/>
      </Grid>
    );
  }
}

export default App;
