import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import './App.css';
import {Grid} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import ArrowForward from '@material-ui/icons/ArrowForward';

import FeedbackStepper from '../Stepper/Stepper';

const sliderStyles = {
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  }
};


class App extends Component {
  render() {

    const cardStyle = {
      background: "linear-gradient(rgb(178, 197, 218), orange)",
      paddingLeft: '25px',
      paddingRight: '25px',
    }
    
    function valuetext(value) {
      return `${value}°C`;
    }

    let sliderValue = 3;

    const sliderChange= (e, value)=>{
        console.log(value);
        sliderValue = value
    }

    const textField = {
      width: '100%'
    }

    const marks = [
      {
        value: 1,
        label: 'Poor',
      },
      {
        value: 2,
        label: 'Little',
      },
      {
        value: 3,
        label: 'Average',
      },
      {
        value: 4,
        label: 'Great',
      },
      {
        value: 5,
        label: 'Amazing',
      }
    ];
    
    const buffButtonMargin = {
      marginTop: '10px'
    }





    return (
      <Grid container direction="column">
        <Grid item>
         <Header/>
        </Grid>
        <br></br>
        
        <Grid alighnItems='center' justify='center'>
          <FeedbackStepper/>
        </Grid>

        {/*Main Body */}
        <Grid item container>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <Grid container spacing={4} justify='center'>
              <Grid item xs={12} sm={10} md={8} lg={6} >
                <Card variant="outlined" style={cardStyle}>
                  <CardHeader
                    align="center"
                    title="Support Rating"
                  />
                  <CardContent>
                    <Typography align="center" id="discrete-slider" gutterBottom>
                      How well have you been supported this week?<br/>(1-5)
                    </Typography>
                    <Slider
                      defaultValue={3}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider"
                      valueLabelDisplay="auto"
                      step={1}
                      marks ={marks}
                      min={1}
                      max={5}
                      onChange={sliderChange}
                    />
                    <br></br>
                    <br></br>
                    <Typography align="center" id="discrete-slider" gutterBottom>
                    
                    What worked for supporting you this week?
                      
                    </Typography>
                    <TextField 
                    inputProps={{
                      maxLength: 1250,
                    }}
                    style={textField}
                    multiline={true}
                    rows='3'
                    rowsMax='6'
                    id="filled-basic" 
                    label="Comments" 
                    variant="filled" />
                    <Typography align='right'>
                      <Button style={buffButtonMargin} variant="contained" color="primary" endIcon={<ArrowForward>Next</ArrowForward>}>
                      Next
                      </Button>
                    </Typography>
                    
                  </CardContent>
                </Card>
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
