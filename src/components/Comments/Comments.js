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
import ArrowForward from '@material-ui/icons/ArrowForward';

import {connect} from 'react-redux';

class Comments extends Component{
    textEntered = (event)=>{
      this.props.dispatch({type: "SET_ADDITIONAL_COMMENTS", payload: event.target.value})
    }
    render(){
        const cardStyle = {
            background: "linear-gradient(rgb(178, 197, 218), orange)",
            paddingLeft: '25px',
            paddingRight: '25px',
          }
          const textField = {
            width: '100%'
          }
 
          const buffButtonMargin = {
            marginTop: '10px'
          } 
        return(
            <Card variant="outlined" style={cardStyle}>
            <CardHeader
              align="center"
              title="Comments"
            />
            <CardContent>
              <Typography align="center" id="discrete-slider" gutterBottom>
                Any other comments/concerns/feedback you'd like to share with us?
              </Typography>
              <br></br>
              <TextField 
              inputProps={{
                maxLength: 2500,
              }}
              style={textField}
              multiline={true}
              rows='6'
              rowsMax='10'
              id="filled-basic" 
              label="Comments" 
              variant="filled" 
              onChange={this.textEntered}/>
              <Typography align='right'>
                <Button style={buffButtonMargin} variant="contained" color="primary" endIcon={<ArrowForward>Next</ArrowForward>}>
                Next
                </Button>
              </Typography>
              {JSON.stringify(this.props.reduxState.additional_comments)}

            </CardContent>
          </Card>
        )
    }
}

const mapStateToProps= (reduxState) => ({
  reduxState
})

export default connect(mapStateToProps)(Comments);