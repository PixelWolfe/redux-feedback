import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

  //these are all the steps
  function getSteps() {
    return ['Feeling', 'Understanding', 'Support', 'Comments', 'Review'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Step 1: Feeling Rating';
      case 1:
        return 'Step 2: Understanding Rating';
      case 2:
        return 'Step 3: Support Rating';
      case 3:
        return 'Step 4: Comments';
      case 4:
        return 'Step 5: Review';
      default:
        return 'Unknown step';
    }
  }
  
  
  //create component
  class FeedbackStepper extends Component {

    //create local state with activeStep int count and completed object
    state = {
      activeStep: 0,
      completed: {}
    };
    
    componentDidMount(){
      this.setState({
        ...this.state,
        activeStep: this.props.reduxState.stepper.activeStep,
        completed: this.props.reduxState.stepper.completed
      })
    }
  
    componentDidUpdate(previousProps) {
      if(this.props.reduxState.stepper !== previousProps.reduxState.stepper) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
      {
        this.setState({
          ...this.state,
          activeStep: this.props.reduxState.stepper.activeStep,
          completed: this.props.reduxState.stepper.completed
        })
      }
    } 

    handleStep = (index)=>{
      console.log('Inside of StepButton,', index);
    }
    

    render() {
      const steps = getSteps();
  
      return (
        <>

         {/*Stepper Component
                Conditionally render a Step Component for every step in steps array
                    -each Step will have a step Button (icon?)
                    -each StepButton will have an onclick where it passes its index into handleStep
                        -handleStep(index) will setState of activeStep to selected StepButton
                    -each StepButton will have a completed attribute that will check itself
                    against its own index as property in the completed state, this will save completed
                    attribute when click on step again (it does not reset if its present)

                    -Inside of StepButton but atlernativeLabel moves it below, will be the matching index of step array
        */}
           <Stepper alternativeLabel activeStep={this.state.activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={(index)=>this.handleStep(index)} completed={this.state.completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <p>STEPPER STATE:</p>{JSON.stringify(this.state)}
          <br></br>
          <br></br>
          <p>REDUX STATE:</p>{JSON.stringify(this.props.reduxState.stepper)}
          </>
      );
    }
  }
  

const mapStateToProps = (reduxState)=>({
  reduxState
})

export default connect(mapStateToProps)(FeedbackStepper);