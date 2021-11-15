import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { globalState } from './../globalState';
import { observer } from "mobx-react";
import GeneralInformation from './GeneralInformation';
import General from './General';
import YurFizCustumer from './YurFizCustumer';
import Payment from './Payment';
import ObjectBonus from './ObjectBonus';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonControl: {
    width: "100%",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 autoFocus"
  }
}));

function getSteps() {
  return ['Oбщие сведения', 'Kлиент', 'Объект', 'Oплата', 'Bonus'];
}

function getStepContent(stepIndex,texts) {
  switch (stepIndex) {
    case 0:
      return (<General texts={texts}/>);
    case 1:
      return (<YurFizCustumer/>);
    case 2:
      return (<ObjectBonus/>);
    case 3:
      return (<Payment/>);
    case 4:
      return (<GeneralInformation/>);
    default:
      return 'Unknown stepIndex';
  }
}

const PortfelStepperBonus = ({texts}) => {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>{(globalState.language==="uz")?"qayta o'rnatish":"перезагрузить"}</Button>
          </div>
        ) : (
          <div>
            <div className={classes.buttonControl}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                {(globalState.language==="uz")?"Orqaga":"Назад"}
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? (globalState.language==="uz")?"Tamomlash":"Завершение": (globalState.language==="uz")?"Keyingi":"Следующий"}
              </Button>
            </div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,texts)}</Typography>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(PortfelStepperBonus);
