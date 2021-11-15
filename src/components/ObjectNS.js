import React from "react";
import axios from "./../baseUrl";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import { globalState } from "../globalState";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import ChangeDate from "../minComponents/ChangeDate";
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';

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
  rootAlert: {
    width: '100%'
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

export default function BasicTextFields({nextButton, nextStep}) {
  const classes = useStyles();
  const [oked, setOked] = React.useState('');
  const [activity_type, setActivityType] = React.useState('');
  const [summa_by_contract, setSummaByContract] = React.useState('');
  const [tariff, setTariff] = React.useState('');
  const [jurnal_register_number, setJurnalRegisterNumber] = React.useState('');
  const [register_date, setRegisterDate] = React.useState(new Date());
  const [pressedButton, setPressedButton] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const createObjectDMS = () => {
    
    let queryBody = {
        oked: oked,
        activity_type: activity_type,
        summa_by_contract: summa_by_contract,
        tariff: tariff,
        jurnal_register_number: jurnal_register_number,
        register_date: register_date,
    }
    axios.post(
        `/add_ns`,
        queryBody
      )
      .then((response) => {
        alert("Malumotlarni saqlash muvoffaqqiyatli bajarildi");
        setOpen(false);
        nextStep();
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
        setOpen(true);
    });
  }

  React.useEffect(()=>{
    if(pressedButton != false){
        createObjectDMS();
    }
    setPressedButton(true);
  },[nextButton])

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
                    {(globalState.language==="ru")?`Добровольное медицинеское страхование`:`Ixtiyoriy tibbiy sug'urta`}
                </Typography>
            </div>
            <div className={classes.rootAlert}>
                <Collapse in={open}>
                    <Alert
                    variant="outlined"
                    severity="error"
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    >
                    Ma'lumotlarni kiritishda xatolikka yo'l qo'ydingiz, tekshirib qaytadan kiriting<br/>
                    </Alert>
                </Collapse>
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "ОКЭД" : "OKED:"}
                    onChange={(event)=>{setOked(event.target.value)}}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Bид деятельности:" : "Faoliyat turi:"}
                    onChange={(event)=>{setActivityType(event.target.value)}}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Тариф:" : "Baho:"}
                    onChange={(event)=>{setTariff(event.target.value)}}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "номер рег" : "reg raqam:"}
                    onChange={(event)=>{setJurnalRegisterNumber(event.target.value)}}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    id="standard-basic"
                    label={(globalState.language==="ru")? "Страхование сумма по договору:" : "Shartnoma bo'yicha sug'urta miqdori:"}
                    onChange={(event)=>{setSummaByContract(event.target.value)}}
                    className={classes.input100}
                />
            </div>
            <div className={classes.box50}>
                <ChangeDate
                    label={(globalState.language==="uz")?"Reg sanasi:":"Дата регистрации:"}
                    funcDate={(arg)=>{setRegisterDate(arg)}}
                />
            </div>
        </div>
        </Box>
    </Grid>
  );
}