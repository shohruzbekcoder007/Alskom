import React from "react";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import { globalState } from "./../globalState";
import Divider from '@material-ui/core/Divider';
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
  messageBox50: {
    width: "50%",
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

export default function Payment() {
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
            <div className={classes.boxTitle}>
                <Typography variant="h5" gutterBottom>
                    {(globalState.language==="ru")?`Oплата`:`To'lov`}
                </Typography>
            </div>
            <div className={classes.box}>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Cтраховая сумма:`:`Sug'urta summasi:`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`10 000 000,00`:`10 000 000,00`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Премия:`:`Mukofot:`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`31 340,00`:`31 340,00`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Учет:`:`Buxgalteriya hisobi:`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Узбекский сум`:`O'zbek so'mi`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Oплата`:`To'lov:`}
                    </Typography>
                </div>
                <div className={classes.messageBox50}>
                    <Typography body2 gutterBottom>
                        {(globalState.language==="ru")?`Узбекский сум`:`O'zbek so'mi`}
                    </Typography>
                </div>
                <div className={classes.box100}>
                    <Typography variant="p" gutterBottom>
                        {(globalState.language==="ru")?"Оплата не произведения:":"To'lov ish emas"}
                    </Typography>
                </div>
            </div>
            <div className={classes.box100}>
                <Divider />
            </div>
            {/* <div className={classes.box}>
                <div className={classes.box50}>
                    <TextField
                        id="standard-basic"
                        label={globalState.language ? "ОКОНХ" : "OKONX:"}
                        className={classes.input100}
                    />
                </div>
                <div className={classes.box50}>
                    <TextField
                        id="standard-basic"
                        label={globalState.language ? "Bид деятельности:" : "Faoliyat turi:"}
                        className={classes.input100}
                    />
                </div>
                <div className={classes.box50}>
                    <ChangeDate
                        label={(globalState.language==="uz")?"Xulosa sanasi:":"Дата заключения:"}
                        funcDate={(arg)=>{console.log(arg)}}
                    />
                </div>
                
                <div className={classes.box50}>
                    <TextField
                        id="standard-basic"
                        label={globalState.language ? "Bид деятельности:" : "Faoliyat turi:"}
                        className={classes.input100}
                    />
                </div>
                <div className={classes.box50}></div>
                <div className={classes.box50}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>{}}
                    >
                        Cохранить
                    </Button>
                </div>
            </div> */}
        </Box>
    </Grid>
  );
}