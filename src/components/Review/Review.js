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
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Comment from '@material-ui/icons/ChatTwoTone';


import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



class Comments extends Component{
    completeStep = ()=>{
      console.log('In next completeStep function');
      this.props.dispatch({type: 'SET_STEPPER_ACTIVESTEP', payload: 5});
      this.props.dispatch({type: 'SET_STEPPER_COMPLETED', payload: {4: true}});


      let feedbackObject = {
        feeling: this.props.reduxState.feedback.feeling,
        feeling_comment: this.props.reduxState.feedback.feeling_comment,
        understanding: this.props.reduxState.feedback.understanding,
        understanding_comment: this.props.reduxState.feedback.understanding_comment,
        support: this.props.reduxState.feedback.support,
        support_comment: this.props.reduxState.feedback.support_comment,
        additional_comments: this.props.reduxState.feedback.additional_comments
      }

      let postFeedback = (feedback)=>{
        axios.post('/feedback', feedback)
         .then((response)=>{
           console.log('response from server:',response);
           this.props.history.push('/thankyou');
         })
         .catch((err)=>{
           alert('Error posting feedback to database!', err);
           console.log(err)
         })
      }

      postFeedback(feedbackObject);
      
      
     
    }

    textEntered = (event)=>{
      this.props.dispatch({type: "SET_ADDITIONAL_COMMENTS", payload: event.target.value})
    }

    render(){

        const theme = createMuiTheme({
            overrides: {
                MuiTableCell: {
                    root: {  //This can be referred from Material UI API documentation. 
                        padding: '5px 8px',
                        minWidth: "none"
                    },
                },
            },
        });

        const cardStyle = {
            background: "linear-gradient(rgb(178, 197, 218), orange)",
            paddingLeft: '25px',
            paddingRight: '25px',
          }
 
          const buffButtonMargin = {
            marginTop: '10px',
            backgroundColor: 'green'
          } 

          function createData(Category, Feedback_Rating, Comment) {
            return { Category, Feedback_Rating, Comment};
          }
          
          const rows = [
            createData('Feeling', 3, 'comments go here'),
            createData('Understanding', 5, 'comments go here'),
            createData('Support', 5, 'comments go here'),
            createData('Other Comments', 305, 'comments go here')
          ];
          
          const feedbackComments = 
          [ this.props.reduxState.feedback.feeling_comment,
            this.props.reduxState.feedback.understanding_comment, 
            this.props.reduxState.feedback.support_comment, 
            this.props.reduxState.feedback.additional_comments]

          const feedbackRatings = [
            this.props.reduxState.feedback.feeling,
            this.props.reduxState.feedback.understanding,
            this.props.reduxState.feedback.support,
            ''
          ]

        return(
            <Card variant="outlined" style={cardStyle}>
            <CardHeader
              align="center"
              title="Feedback Review"
            />
            <CardContent>
              <Typography align="center" id="discrete-slider" gutterBottom>
                Here's what you're sending us!<br></br> Want to make any edits?
              </Typography>
              <br></br>
              <ThemeProvider theme={theme}>
                <Table aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell align='center'>Rating (1-5)</TableCell>
                      <TableCell>Comment</TableCell>
                      <TableCell align="center">Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={row.Category}>
                        <TableCell>{row.Category}</TableCell>
                        <TableCell align='center'>{feedbackRatings[index]}</TableCell>
                        <TableCell>
                          <Tooltip title={feedbackComments[index]} arrow>
                          <Button startIcon={<Comment></Comment>}></Button>
                          </Tooltip>
                        </TableCell>
                        <TableCell align='center'>
                          <Button variant='contained' size='small'>Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </ThemeProvider>
                
              <Typography align='right'>
                <Button onClick={this.completeStep} style={buffButtonMargin} variant="contained" color="primary" endIcon={<DoneAll>Submit Feedback!</DoneAll>}>
                Submit Feedback!
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