import 'date-fns';
import React from 'react';
import axios from "../baseUrl";
import { observer } from "mobx-react";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { globalState } from "../globalState";
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import MySelect from "../minComponents/MySelect";
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MuiPhoneNumber from "material-ui-phone-number";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import ChangeDate from "./../minComponents/ChangeDate";

const useStyles = makeStyles({
    root: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around',
        flexFlow: "wrap",
        margin: "0 auto",
        marginTop: "20px",
        padding: "5px 10px",
        border: "1px solid #eee"
    },
    box: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexFlow: "wrap",
    },
    box30: {
        width: "30%",
        padding: "10px 10px"
    },
    box40: {
        width: "40%",
        padding: "10px 10px",
        textAlign: "center"
    },
    box60: {
        width: "60%",
        padding: "10px 10px"
    },
    box100: {
        width: "100%",
        padding: "10px 10px"
    },
    box70: {
        width: "70%",
        padding: "10px 10px"
    },
    box50: {
        width: "50%",
        padding: "10px 10px"
    },
    input100: {
        width: "100%",
    },
    box20: {
        width: "20%",
        padding: "10px 10px"
    },
    box25: {
        width: "25%",
        padding: "10px 10px"
    },
    rootAlert: {
        width: '100%'
    },
})

const CustomerYur = ({setValueFiz, openError}) => {

  const classes = useStyles();

  const [inn, setInn] = React.useState('');
  const [mfo, setMfo] = React.useState('');
  const [bank, setBank] = React.useState('');
  const [schot, setSchot] = React.useState('');
  const [city, setCity] = React.useState([]);
  const [city_id, setCityId] = React.useState(0);
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [aparment, setAparment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [site, setSite] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [phone2, setPhone2] = React.useState('');
  const [fax, setFax] = React.useState('');
  const [postcode,setPostcode] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');
  const [pasportSeriya, setPasportSeriya] = React.useState('');
  const [pasportNummber, setPasportNumber] = React.useState('');
  const [pasportGiven, setPasportGiven] = React.useState(new Date());
  const [inps, setInps] = React.useState('');
  const [name, setName] = React.useState('');
  const [firstName, setFirtsName] = React.useState('');
  const [fathName, setFathName] = React.useState('');
  const [gender, setGender] = React.useState("1");
  const [passportGiven, setPassportGiven] = React.useState('');
  const [chp, setChp] = React.useState(false);
  const [dateBirth, setDateBirth] = React.useState(new Date());
  const [fromDate, setFromDate] = React.useState(new Date());
  const [finishDate, setFinishDate] = React.useState(new Date());


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

  const getValues = () => {
      return  {
        selected: "1",
        city_id: city_id,
        street: street,
        house: house,
        email: email,
        aparment: aparment,
        site: site,
        phone: phone,
        phone2: phone2,
        fax: fax,
        inn: inn,
        bank: bank,
        mfo: mfo,
        postcode: postcode,
        contract_number: globalState.contract_number,  // bu kerak 
        // contract_number: "896",
        checking_account: schot,
        bank_boolean: checked,
        resident: (radioValue == "1")?true:false,
        passport_ser: pasportSeriya,
        passport_num: pasportNummber,
        passport_given: pasportGiven,
        inps: inps,
        name: name,
        first_name: firstName,
        fath_name: fathName,
        gender: gender,
        passport_given: passportGiven,
        chp: chp,
        date_birth: dateBirth,
        from_date: fromDate,
        finish_date: finishDate,
        // region_id: "",
        // district_id: "",
        // accountant: "",
      }
  }

  React.useEffect(() => {
    getGeographicalArea();
  },[]);

  React.useEffect(() => {
    setOpen(openError);
  },[openError]);
  
  return (
    <Grid container>
      <div
        bgcolor="background.paper"
        mt={3}
        className={classes.root}
      >
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


        
        <div className={classes.box}>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setPasportSeriya(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"Паспорт серия:":"Pasport seriya:"}
                />
            </div>
            <div className={classes.box40}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setPasportNumber(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"Паспорт номер:":"Pasport raqami:"}
                />
            </div>
            <div className={classes.box30}>
                <ChangeDate
                    label={(globalState.language==="ru")?"Когда виден:":"Qachon berilgan:"}
                    funcDate={(arg)=>{
                        setPasportGiven(arg)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div>

        
        <div className={classes.box}>
            <div className={classes.box100}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setPassportGiven(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"Pasport berilgan:":"Паспорт выдан:"}
                />
            </div>
        </div>

        <div className={classes.box}>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setFirtsName(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"Фамилия:":"Familiya:"}
                />
            </div>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setName(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"Имя:":"Ism:"}
                />
            </div>
            <div className={classes.box40}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setFathName(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"Отчество:":"Otasini ismi:"}
                />
            </div>
        </div>

        <div className={classes.box}>
            <div className={classes.box30}>
                <FormControl className={classes.input100}>
                    <InputLabel id="demo-simple-select-outlined-label">{(globalState.language==="uz")?"Jinsi:":"Пол:"}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gender}
                        onChange={(event)=>{
                            setGender(event.target.value)
                            setValueFiz(getValues)
                        }}
                    >
                    <MenuItem value={"1"}>{(globalState.language==="uz")?"Erkak":"Мужчина"}</MenuItem>
                    <MenuItem value={"2"}>{(globalState.language==="uz")?"Ayol":"Женщина"}</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.box40}>
                <TextField
                    className={classes.input100}
                    // onChange={(event)=>{setInn(event.target.value); setValueFiz(getValues)}}  // bunda удоств.предп yuborilishi kerak hozircha serverga junatilmagan
                    label={(globalState.language==="ru")?"удоств.предп:":"Tasdiqlovchi vakil:"}
                />
            </div>
            <div className={classes.box30}>
                <ChangeDate
                    label={(globalState.language==="ru")?"Дата рождения:":"Tug'ilgan kun:"}
                    funcDate={(arg)=>{
                        setDateBirth(arg)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div>

        <div className={classes.box} style={{alignItems: "flex-end"}}>
            <div className={classes.box20} style={{paddingBottom: 0}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedC"
                            color="primary"
                            checked={chp}
                            onChange={(event) => {
                                setChp(event.target.checked)
                                setValueFiz(getValues)
                            }}
                        />
                    }
                    label={(globalState.language==="ru")?`ЧП`:`CHP`}
                />
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setInps(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="ru")?"ИНПC:":"INPS:"}
                />
            </div>
            <div className={classes.box25}>
                <ChangeDate
                    label={(globalState.language==="ru")?"Дата выдачи:":"Berilgan sana:"}
                    funcDate={(arg)=>{
                        setFromDate(arg)
                        setValueFiz(getValues)
                    }}
                />
            </div>
            <div className={classes.box30}>
                <ChangeDate
                    label={(globalState.language==="ru")?"Дата окончания:":"Tugash muddati:"}
                    funcDate={(arg)=>{
                        setFinishDate(arg)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div> 




        <div className={classes.box}>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setInn(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"INN:":"ИНН:"}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setSchot(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"Hisob raqami:":"Расчётный счёт:"}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setMfo(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"MFO":"МФO:"}
                />
            </div>
            <div className={classes.box70}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setBank(event.target.value)
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"Bank":"Банк:"}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <MySelect
                    className={classes.input100}
                    titleFunc={(option) => option.name_ru}
                    option={city}
                    label={(globalState.language==="uz")?"Mamlakat:":"Страна:"}
                    returnSected={(arg)=>{
                        if(arg){
                            setCityId(arg._id)
                            setValueFiz(getValues)
                        } else {
                            setCityId(0)
                            setValueFiz(getValues)
                        }
                    }}
                />
            </div>
            <div className={classes.box50}>
                <MySelect
                    className={classes.input100}
                    titleFunc={(option) => option.name_ru}
                    option={city}
                    label={(globalState.language==="uz")?"Viloyat:":"Oбласть:"}
                    returnSected={(arg)=>{
                        if(arg){
                            setCityId(arg._id)
                            setValueFiz(getValues)
                        } else {
                            setCityId(0)
                            setValueFiz(getValues)
                        }
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={()=>{
                        setValueFiz(getValues)
                    }}
                    label={(globalState.language==="uz")?"Shahar/tuman:":"Район/Город:"}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Ko'cha/Chorak:":"Улица/Квартал:"}
                    onChange={(event)=>{
                        setStreet(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Sayt:":"Сайт:"}
                    onChange={(event)=>{
                        setSite(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"E-mail:":"E-mail:"}
                    onChange={(event)=>{
                        setEmail(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <MuiPhoneNumber
                    defaultCountry={'uz'}
                    onChange={(value) => {
                        setPhone(value)
                        setValueFiz(getValues)
                    }}/>
            </div>
            <div className={classes.box50}>
                <MuiPhoneNumber
                    defaultCountry={'uz'}
                    onChange={(value) => {
                        setPhone2(value)
                        setValueFiz(getValues)
                    }}/>
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Uy:":"Дом:"}
                    onChange={(event)=>{
                        setHouse(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Kvartira:":"Квартира:"}
                    onChange={(event)=>{
                        setAparment(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
                
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Poch.ind:":"Поч.инд:"}
                    onChange={(event)=>{
                        setPostcode(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Faks:":"Факс:"}
                    onChange={(event)=>{
                        setFax(event.target.value)
                        setValueFiz(getValues)
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedC"
                            color="primary"
                            checked={checked}
                            onChange={(event) => {
                                setChecked(event.target.checked)
                                setValueFiz(getValues)
                            }}
                        />
                    }
                    label={(globalState.language==="ru")?`Банк`:`Bank`}
                />
            </div>
            <div className={classes.box50}>
                <span>{(globalState.language==="ru")?`Резидент:`:`Rezident:`}</span>
                <RadioGroup
                value={radioValue}
                onChange={(event) => {
                    setRadioValue(event.target.value);
                    setValueFiz(getValues)
                    
                }}
                >
                    <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label={(globalState.language==="ru")?`Да`:`Ha`}
                    />
                    <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label={(globalState.language==="ru")?`Нет`:`Yo'q`}
                    />
                </RadioGroup>
            </div>
            
        </div>
      </div>
    </Grid>
  );
}

export default observer(CustomerYur);