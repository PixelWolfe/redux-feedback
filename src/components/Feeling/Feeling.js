import React, {Component} from 'react';
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

class Feeling extends Component{
    render(){
        const cardStyle = {
            background: "linear-gradient(rgb(178, 197, 218), orange)",
            paddingLeft: '25px',
            paddingRight: '25px',
          }
          
          function valuetext(value) {
            return `${value}`;
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
              label: 'Horrid',
            },
            {
              value: 2,
              label: 'Subpar',
            },
            {
              value: 3,
              label: 'Okay',
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
        return(
            <Card variant="outlined" style={cardStyle}>
            <CardHeader
              align="center"
              title="Feeling Rating"
            />
            <CardContent>
              <Typography align="center" id="discrete-slider" gutterBottom>
                How have you been feeling today?<br/>(1-5)
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
              
              Anything you would like us to know?
                
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
        )
    }
}

export default Feeling;