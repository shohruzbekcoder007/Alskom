import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { globalState } from './../globalState';
import { observer } from "mobx-react";

const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-around',
      flexFlow: "wrap"
    },
    inputBox: {
      width: "50%",
      padding: "15px"
    },
    title : {
      width: "100%",
      textAlign: "center",
      paddingTop: "15px"
    },
    formControl: {
      width: "100%",
    },
    textField: {
      width: "100%",
    },
    textFieldDate: {
      width: "160px",
    },
    inputBoxLast: {
      width: "50%",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
})

const GeneralInformation = () => {

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        p={1}
        mt={1}
        className={classes.root}
      >
        <div className={classes.title}>
          <Typography variant="h5" gutterBottom>
            Долгострочное страхование  жизне "Бонус"
          </Typography>
        </div>
        <div className={classes.inputBox}>
          <TextField
            type="number"
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Cтраховая сумма по договору":"Shartnoma bo'yicha sug'urta summasi"}
            variant="outlined"
          />
        </div>
        <div className={classes.inputBox}>
          <TextField
            type="number"
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Cумма годовых рентных платежей":"Yillik ijara to'lovlari"}
            variant="outlined"
          />
        </div>
        <div className={classes.inputBox}>
          <TextField
            type="number"
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Лимит страховых возмещений":"Sug'urta da'volari chegarasi"}
            variant="outlined"
          />
        </div>
        <div className={classes.inputBox}>
          
        </div>
        <div className={classes.inputBox}>
          <TextField
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Cумма единичного рентного платежа":"yagona ijara to'lovi"}
            variant="outlined"
          />
        </div>
        <div className={classes.inputBox}>
          <TextField type="number"
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Cтраховая премия":"yagona ijara to'lovi"}
            variant="outlined"
          />
        </div>
        <div className={classes.inputBoxLast}>
          
        </div>
        <div className={classes.inputBoxLast}>
          <TextField
            className={classes.textField} 
            id="outlined-basic"
            label={(globalState.language === "ru")?"Пожизненной ренте до достижения 60 лет":"60 yoshgacha bo'lgan hayot annuiteti"}
            variant="outlined"
          />
          <Button variant="contained" color="primary">
            Cохранить
          </Button>
        </div>
      </Box>
    </Grid>
  );
}

export default observer(GeneralInformation);
