import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing.unit,
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
    },
  });

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
  class FeedbackStepper extends React.Component {

    //create local state with activeStep int count and completed object
    state = {
      activeStep: 0,
      completed: {},
    };
  
    totalSteps = () => getSteps().length;
  
    
    handleNext = () => {
      let activeStep;
       // If activeStep is last step AND 
            //all steps are NOT complete,
      if (this.isLastStep() && !this.allStepsCompleted()) {
        // find the first step that has been completed

        //save all steps formatted step = ['step label','step label']
        const steps = getSteps();
        //set activeStep to the first index that matches of step
        activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
      } else {
        activeStep = this.state.activeStep + 1;
      }
      this.setState({
        activeStep,
      });
    };
  
    handleBack = () => {
        //setState this.state.activeStep minus one
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    };
  
    handleStep = step => () => {
        //
      this.setState({
        activeStep: step,
      });
    };
  
    handleComplete = () => {
         //const completed = this.state.completed
      const { completed } = this.state;

      //this.state.completed[activeStep] = true;
      completed[this.state.activeStep] = true;

      //set completed of that active state to true
      //so if this.state.activeState = 4 then completed: {4: true}
      this.setState({
        completed, //{completed: {}
      });
      
      //call
      this.handleNext();
    };
  
    handleReset = () => {
      this.setState({
        activeStep: 0,
        completed: {},
      });
    };
  
    //tracks how many entries are in object
    completedSteps() {
      return Object.keys(this.state.completed).length;
    }
  
    //returns true or false if active step is last step
    isLastStep() {
      return this.state.activeStep === this.totalSteps() - 1;
    }
  
    //
    allStepsCompleted() {
      return this.completedSteps() === this.totalSteps();
    }
  
    render() {
      const { classes } = this.props;
      const steps = getSteps();
      const { activeStep } = this.state;
  
      return (
        <div className={classes.root}>

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
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={this.handleStep(index)} completed={this.state.completed[index]}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>
      );
    }
  }
  
  FeedbackStepper.propTypes = {
    classes: PropTypes.object,
  };
  

export default withStyles(styles)(FeedbackStepper);