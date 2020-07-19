import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DoneAll from '@material-ui/icons/DoneAll';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Add from '@material-ui/icons/Add';


class Comments extends Component{
  resetStepperAndFeedback = ()=>{
    console.log('In resetStepperAndFeeback');
    this.props.dispatch({type: 'RESET_STEPPER'});
    this.props.dispatch({type: 'RESET_FEEDBACK'});
    this.props.history.push('/feeling');
  }

    textEntered = (event)=>{
      this.props.dispatch({type: "SET_ADDITIONAL_COMMENTS", payload: event.target.value})
    }

    render(){

        const cardStyle = {
            background: "linear-gradient(rgb(178, 197, 218), orange)",
            paddingLeft: '25px',
            paddingRight: '25px',
          }
 
          const buffButtonMargin = {
            marginTop: '10px',
            backgroundColor: 'green'
          } 

          const green = {
            marginTop: '10px',
            backgroundColor: 'green'
          }
          
   
        return(
            <Card variant="outlined" style={cardStyle}>
            <CardHeader
              align="center"
              title="You're all Done!"
            />
            <CardContent>
              <Typography align="center" gutterBottom>
                Thank you for providing feedback!
                <br></br>
                <br></br>

              </Typography>
              <Typography align="left" gutterBottom>
                Your information is securely stored and you may now safely exit this page at any point.
                All information will be kept confidential and
                will only be used for improving our user experience.
                <br></br>
                <br></br>
                If you have additional concerns or suggestions 
                feel free to contact us at companyName@feedback.com.
                <br/>
                <br/>
              </Typography>
              <Typography align="center">
                Have another feedback submission to make? Click the button below.
              </Typography>
              <Typography align='center'>
  
                <Button style={green} onClick={this.resetStepperAndFeedback} variant="contained" color="primary" endIcon={<Add>Another Feedback Submission</Add>}>
                  Start New Feedback
                </Button>
              </Typography>
            </CardContent>
          </Card>
        )
    }
}

const mapStateToProps= (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(withRouter(Comments));