import 'date-fns';
import React from 'react';
import axios from "./../baseUrl";
import { observer } from "mobx-react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { globalState } from "./../globalState";
import Select from "./../minComponents/Select";
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ChangeDate from "./../minComponents/ChangeDate";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles({
    root: {
      maxWidth: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      flexFlow: "wrap",
      margin: "0 auto"
    },
    rootAlert: {
        width: '100%'
      },
    inputBox: {
      width: "50%",
      padding: "5px 15px"
    },
    title : {
      width: "100%",
      textAlign: "center",
      paddingTop: "15px"
    },
    text : {
      width: "100%",
      textAlign: "left",
      paddingTop: "15px",
      paddingLeft: "15px",
      paddingBottom: "5px"
    },
    payment: {
      width: "100%",
      padding: "5px 15px",
      marginBottom: "15px"
    },
    formControl: {
      width: "100%",
    },
    textField: {
      width: "100%",
      padding: 0,
    },
    inputBoxLast: {
      width: "50%",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    datesAndDays: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: "5px",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingBottom: "10px"
    },
    textDays: {
      maxWidth: '100px'
    }
})

const General = ({texts,nextButton,nextStep}) => {

  const classes = useStyles();
  const [selectedDate1, setSelectedDate1] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());
  const [selectedDate3, setSelectedDate3] = React.useState(new Date());
  const [city, setCity] = React.useState([]);
  const [currency, setCurrency] = React.useState([]);
  const [employee, setEmployee] = React.useState([]);
  const [clients, setClients] = React.useState([]);
  const [client_id, setClient_id] = React.useState(0);
  const [city_id, setCityId] = React.useState(0);
  const [currency_id, setCurrencyId] = React.useState(0);
  const [payment_source, setPayment_source] = React.useState('');
  const [employee_id, setEmployeeId] = React.useState(0);
  const [created, setCreated] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("1");
  const [new_client,setNew_client] = React.useState(false);
  const [sez,setSez] = React.useState(false);
  const [farmer,setFarmer] = React.useState(false);
  const [investment_project, setInvestment_project] = React.useState(false);
  const [export_agreement, setExport_agreement] = React.useState(false);
  const [pressedButton, setPressedButton] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const getGeographicalArea = () => {
    axios.get(`/city`)
      .then((res) => {
        setCity(res.data);
      })
      .catch((error) => {
          console.error(error);
      })
  };

  const getCurrency = () => {
    axios.get(`/all_currency`)
      .then((res) => {
        setCurrency(res.data);
      })
      .catch((error) => {
          console.error(error);
      })
  };

  const getClients = () => {
    axios.get(`/get_client`)
      .then((res) => {
        setClients(res.data);
      })
      .catch((error) => {
          console.error(error);
      })
  };

  const getEmployeer = () => {
    axios.get(`/get_employeer`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => {
          console.error(error);
      })
  };

  const createGeneralInformation = () => {
    let sekunds = Math.abs(selectedDate1 - selectedDate2);
    let days = Math.round((((sekunds/1000)/60)/60)/24);
    console.log({
      currency_id: currency_id,
      geografic_id: city_id,
      class_type_id: texts._id,
      start_period: selectedDate1,
      finish_period: selectedDate2,
      date_conclusion: selectedDate3,
      days: Math.round((((Math.abs(selectedDate1 - selectedDate2)/1000)/60)/60)/24),
      employeer_id: employee_id,
      contract_number: created,
      payment_source: radioValue,
      currency_condition: payment_source,
      export_agreement: export_agreement,
      investment_project: setInvestment_project,
      farmer: farmer,
      sez: sez,
      new_client: new_client,
      vigod_acquirer: client_id
    });
    axios.post(
      `/add_general_info`,
      {
        currency_id: currency_id,
        geografic_id: city_id,
        class_type_id: texts._id,
        start_period: selectedDate1,
        finish_period: selectedDate2,
        date_conclusion: selectedDate3,
        days: days,
        employeer_id: employee_id,
        contract_number: created,
        payment_source: radioValue,
        currency_condition: payment_source,
        export_agreement: export_agreement,
        investment_project: setInvestment_project,
        farmer: farmer,
        sez: sez,
        new_client: new_client,
        vigod_acquirer: client_id
      }
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

  React.useEffect(() => {
    getGeographicalArea();
    getCurrency();
    getEmployeer();
    getClients();
  },[]);

  React.useEffect(()=>{
    if(pressedButton != false){
      createGeneralInformation();
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
        <div className={classes.title}>
          <Typography variant="h5" gutterBottom>
            {(globalState.language==="ru")?`Oбщие сведения`:`Umumiy ma'lumot`}
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
                  Ma'lumotlarni kiritishda xatolikka yo'l qo'ydingiz, tekshirib qaytadan kiriting!!!
                </Alert>
            </Collapse>
        </div>
        <div className={classes.text}>
          <Typography variant="p" gutterBottom>
            {(globalState.language==="ru")?"Вид строхования:  "+texts.text_ru:"Sug'urta turi: "+texts.text_uz}
          </Typography>
        </div>
        <div className={classes.datesAndDays}>
          <ChangeDate
            label={(globalState.language==="uz")?"Boshlangan vaqti:":"Hачальное время:"}
            funcDate={(arg)=>{setSelectedDate1(arg)}}
          />
          <ChangeDate
            label={(globalState.language==="uz")?"Tugatiladigan vaqti:":"Bремя окончания:"}
            funcDate={(arg)=>{setSelectedDate2(arg)}}
          />
        </div>
        <div className={classes.inputBox}>
          <Select
            className={classes.textField}
            titleFunc={(option) => {return option.first_name + " " + option.last_name}}
            option={employee}
            label={(globalState.language==="uz")?"Sug'urtalangan":"Cтрахователь"}
            returnSected={(arg)=>{
              if(arg){
                setEmployeeId(arg._id)
              } else {
                setEmployeeId(0)
              }
            }}
          />
        </div>
        <div className={classes.inputBox}>
          <Select
            className={classes.textField}
            titleFunc={(option) => option.name_ru}
            option={city}
            label={(globalState.language==="uz")?"Geografik hudud":"Географическая зона"}
            returnSected={(arg)=>{
              if(arg){
                setCityId(arg._id)
              } else {
                setCityId(0)
              }
            }}
          />
        </div>
        <div className={classes.inputBox}>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label={(globalState.language==="uz")?"Shartnoma raqami":"Hомер договора"}
            onChange={(event) => {
              setCreated(event.target.value)
            }}
          />
        </div>
        <div className={classes.inputBox}>
          <Select
            className={classes.textField}
            titleFunc={(option) => option.name}
            option={currency}
            label={(globalState.language==="uz")?"Valyuta":"Валюта"}
            returnSected={(arg)=>{
              if(arg){
                setCurrencyId(arg._id)
              } else {
                setCurrencyId(0)
              }
            }}
          />
        </div>
        <div className={classes.inputBox}>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label={(globalState.language==="uz")?"Eski shartnoma raqami":"Cтарый номер договора"}
            onChange={(event) => {
              setCreated(event.target.value)
            }}
          />
        </div>
        <div className={classes.inputBox}>
            <Select
                className={classes.textField}
                titleFunc={(option) => {return option.email}}
                option={clients}
                label={(globalState.language==="uz")?"Benefisiar":"Бенефицир"}
                returnSected={(arg)=>{
                if(arg){
                    setClient_id(arg._id)
                } else {
                    setEmployeeId(0)
                }
                }}
            />
        </div>
        <div className={classes.payment}>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label={(globalState.language==="uz")?"Valyuta shartlari":"Bалютные условия"}
            onChange={(event) => {
              setPayment_source(event.target.value)
            }}
          />
        </div>
        
        <div className={classes.inputBox}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedC"
                        color="primary"
                        checked={export_agreement}
                        onChange={(event) => {setExport_agreement(event.target.checked)}}
                    />
                }
                label={(globalState.language==="ru")?`экспортный договор`:`eksport shartnomasi`}
            />
        </div>
        <div className={classes.inputBox}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedC"
                        color="primary"
                        checked={investment_project}
                        onChange={(event) => {setInvestment_project(event.target.checked)}}
                    />
                }
                label={(globalState.language==="ru")?`инвестиционные проект`:`investitsiya loyihasi`}
            />
        </div>
        <div className={classes.inputBox}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedC"
                        color="primary"
                        checked={farmer}
                        onChange={(event) => {setFarmer(event.target.checked)}}
                    />
                }
                label={(globalState.language==="ru")?`сельскохозяйственная отрасль`:`qishloq xo'jaligi sanoati`}
            />
        </div>
        <div className={classes.inputBox}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedC"
                        color="primary"
                        checked={sez}
                        onChange={(event) => {setSez(event.target.checked)}}
                    />
                }
                label={(globalState.language==="ru")?`сэз`:`sez`}
            />
        </div>
        <div className={classes.inputBox}>
            <FormControlLabel
                control={
                    <Checkbox
                        name="checkedC"
                        color="primary"
                        checked={new_client}
                        onChange={(event) => {setNew_client(event.target.checked)}}
                    />
                }
                label={(globalState.language==="ru")?`новый клиент`:`yangi mijoz`}
            />
        </div>
        <div className={classes.inputBox}></div>
        <div className={classes.payment}>
            <RadioGroup
              value={radioValue}
              onChange={(event) => {
                setRadioValue(event.target.value);
                
              }}
            >
                <FormControlLabel
                    value="1"
                    control={<Radio color="primary" />}
                    label={(globalState.language==="ru")?`собственный средства`:`o'z mablag'lari`}
                />
                <FormControlLabel
                    value="2"
                    control={<Radio color="primary" />}
                    label={(globalState.language==="ru")?`бюджетные средства`:`byudjet resurslari`}
                />
            </RadioGroup>
        </div>
        <div className={classes.inputBox}>
          <ChangeDate
            label={(globalState.language==="uz")?"Xulosa sanasi:":"Дата заключения:"}
            funcDate={(arg)=>{setSelectedDate3(arg)}}
          />
        </div>
        
      </Box>
    </Grid>
  );
}

export default observer(General);
