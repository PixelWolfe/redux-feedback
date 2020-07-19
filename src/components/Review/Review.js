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

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Comment from '@material-ui/icons/ChatTwoTone'

import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';



class Comments extends Component{
    completeStep = ()=>{
      console.log('In next completeStep function');
      this.props.dispatch({type: 'SET_STEPPER_ACTIVESTEP', payload: 5})
      this.props.dispatch({type: 'SET_STEPPER_COMPLETED', payload: {4: true}})
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

          function createData(Category, Feedback_Rating, Comment) {
            return { Category, Feedback_Rating, Comment};
          }
          
          const rows = [
            createData('Feeling', 3, 'comments go here'),
            createData('Understanding', 5, 'comments go here'),
            createData('Support', 5, 'comments go here'),
            createData('Additional Comments', 305, 'comments go here')
          ];
          
          const feedbackComments = 
          [ this.props.reduxState.feedback.feeling_comment,
            this.props.reduxState.feedback.understanding_comment, 
            this.props.reduxState.feedback.support_comment, 
            this.props.reduxState.feedback.additional_comments]

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
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell>Rating (1-5)</TableCell>
                      <TableCell>Comment</TableCell>
                      <TableCell align="center">Edit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={row.Category}>
                        <TableCell>{row.Category}</TableCell>
                        <TableCell align='center'>{row.Feedback_Rating}</TableCell>
                        <TableCell>
                          <Tooltip title={feedbackComments[index]} arrow>
                          <Button startIcon={<Comment>{row.Comment}</Comment>}></Button>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' size='small'>Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
                
              <Typography align='right'>
                <Button style={buffButtonMargin} variant="contained" color="primary" endIcon={<DoneAll>Submit Feedback!</DoneAll>}>
                Submit Feedback!
                </Button>
              </Typography>
              {JSON.stringify(this.props.reduxState)}

            </CardContent>
          </Card>
        )
    }
}

const mapStateToProps= (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(Comments);