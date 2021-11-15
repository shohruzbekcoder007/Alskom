import React from "react";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import { globalState } from "./../globalState";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import ChangeDate from "./../minComponents/ChangeDate";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexFlow: "wrap",
    margin: "0 auto",
    padding: "15px 20px"
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexFlow: "wrap"
  },
  boxTitle: {
    width: "100%",
    textAlign: "center",
    paddingTop: "15px",
  },
  box25: {
    width: "25%",
    padding: "5px"
  },
  box50: {
    width: "50%",
    padding: "5px"
  },
  box30: {
    width: "30%",
    padding: "5px"
  },
  box70: {
    width: "70%",
    padding: "5px"
  },
  box100: {
    width: "100%",
    padding: "5px"
  },
  input100: {
    width: "100%"
  }
}));

export default function ObjectBonus() {
  const classes = useStyles();

  return (
      <Grid container>
        <Box
            boxShadow={2}
            bgcolor="background.paper"
            p={1}
            mt={1}
            className={classes.root}
        >
        <div className={classes.box}>
            <div className={classes.boxTitle}>
                <Typography variant="h5" gutterBottom>
                    {(globalState.language==="ru")?`Долгострочное страхование  жизне "Бонус"`:`Uzoq muddatli hayotni sug'urta qilish "Bonus"`}
                </Typography>
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "При смерти:" : "O'lim oldidan:"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "При дожитии:" : "Tirik bo'lganda:"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Cтраховая сумма по договору:" : "Shartnoma bo'yicha sug'urta summasi:"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "ежемесячная оплата(премия):" : "Oylik to'lov(mukofot):"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Oсновной страховой тариф:" : "Asosiy sug'urta stavkasi:"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Номер регистрации в журнале:" : "Jurnalda ro'yxatdan o'tish raqami:"}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <ChangeDate
                    label={(globalState.language==="uz")?"Ro'yxatga olingan sana:":"Дата регистрации:"}
                    funcDate={(arg)=>{console.log(arg)}}
                />
            </div>
            <div className={classes.box50}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{}}
                >
                    Cохранить
                </Button>
            </div>
        </div>
        </Box>
    </Grid>
  );
}