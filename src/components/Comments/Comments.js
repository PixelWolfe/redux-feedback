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

class Comments extends Component{
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
        )
    }
}

export default Comments;