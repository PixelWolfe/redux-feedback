import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './App.css';
import {Grid} from '@material-ui/core';
import {connect} from 'react-redux';

import Comments from '../Comments/Comments';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling'
import Support from '../Support/Support';
import FeedbackStepper from '../Stepper/Stepper';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

import {HashRouter as Router, Route, Link, withRouter} from 'react-router-dom';

class App extends Component {

  postFeedback = (feedback)=>{
    axios.post('/feedback', feedback)
     .then((response)=>{
       console.log('response from server:',response);
     })
     .catch((err)=>{
       alert('Error posting feedback to database!', err);
       console.log(err)
     })
  }

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
               

                <Router>
                  <Route exact path='/' component={Feeling}/>
                  <Route path='/feeling' component={Feeling}/>
                  <Route path='/understanding' component={Understanding}/>
                  <Route path='/support' component={Support}/>
                  <Route path='/comments' component={Comments}/>
                  <Route path='/review' component={Review}/>
                  <Route path='/thankyou' component={ThankYou}/>
                </Router>

                {/*
                  <br></br>
                  <Understanding/>
                  <br></br>
                  <Support/>
                  <br></br>
                  <Comments/>
                  <br></br>
                  <Review/>
                */}
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>    
        <Grid item xs={1}/>
      </Grid>
    );
  }
}

const mapStateToProps = (reduxState) =>({
  reduxState
})

export default connect(mapStateToProps)(App);
