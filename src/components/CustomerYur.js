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
    box25: {
        width: "25%",
        padding: "10px 10px"
    },
    rootAlert: {
        width: '100%'
    },
})

const CustomerYur = ({setValueYur, openError}) => {

  const classes = useStyles();

  const [nameSelect, setNameSelect] = React.useState("OOO");
  const [name, setName] = React.useState('');
  const [inn, setInn] = React.useState('');
  const [mfo, setMfo] = React.useState('');
  const [bank, setBank] = React.useState('');
  const [okpo, setOkpo] = React.useState('');
  const [soato, setSoato] = React.useState('');
  const [schot, setSchot] = React.useState('');
  const [mainWork, setMainWork] = React.useState('');
  const [city, setCity] = React.useState([]);
  const [city_id, setCityId] = React.useState(0);
  const [get_okonx, setOet_okonx] = React.useState([])
  const [okonx, setOkonx] = React.useState(0);
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

  const getOkonx = () => {
    axios.get(`/get_okonx`)
    .then((res) => {
        setOet_okonx(res.data);
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error);
    })
  }
  
  const getValues = () => {
      return {
        selected: "2",
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
        name: name,
        okpo: okpo,
        saoto: soato,
        purpose: mainWork,
        postcode: postcode,
        type_naimenovaniya: nameSelect,
        contract_number: globalState.contract_number,
        // contract_number: "896",
        checking_account: schot,
        bank_boolean: checked,
        okonx_id: okonx,
        resident: (radioValue == "1")?true:false,

        // region_id: "",
        // district_id: "",
        // accountant: "",
      }
  }

  React.useEffect(() => {
    getGeographicalArea();
    getOkonx();
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
                <FormControl className={classes.input100}>
                    <InputLabel id="demo-simple-select-outlined-label">{(globalState.language==="uz")?"Ism:":"Наименование:"}</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={nameSelect}
                        onChange={(event)=>{
                            setNameSelect(event.target.value)
                            setValueYur(getValues())
                        }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"OOO"}>OOO</MenuItem>
                    <MenuItem value={"YTT"}>YTT</MenuItem>
                    <MenuItem value={"MCHJ"}>MCHJ</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.box70}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setName(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"Ism:":"Наименование:"}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setInn(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"INN:":"ИНН:"}
                />
            </div>
            <div className={classes.box50}>
                <MySelect
                    className={classes.input100}
                    titleFunc={(option) => option.name}
                    option={get_okonx}
                    label={(globalState.language==="uz")?"OKONX:":"OKOНX:"}
                    returnSected={(arg)=>{
                        if(arg){
                            setOkonx(arg._id)
                            setValueYur(getValues())
                        } else {
                            setOkonx(0)
                            setValueYur(getValues())
                        }
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setMfo(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"MFO":"МФO:"}
                />
            </div>
            <div className={classes.box70}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setBank(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"Bank":"Банк:"}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box30}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setSchot(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"Hisob raqami:":"Расчётный счёт:"}
                />
            </div>
            <div className={classes.box70}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setMainWork(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"Baza asosida harakat qiladi:":"Действует на основание:"}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setOkpo(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"OKPO:":"OKПO"}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    onChange={(event)=>{
                        setSoato(event.target.value)
                        setValueYur(getValues())
                    }}
                    label={(globalState.language==="uz")?"SOATO:":"COATO:"}
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
                            setValueYur(getValues())
                        } else {
                            setCityId(0)
                            setValueYur(getValues())
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
                            setValueYur(getValues())
                        } else {
                            setCityId(0)
                            setValueYur(getValues())
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
                        setValueYur(getValues())
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
                        setValueYur(getValues())
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
                        setValueYur(getValues())
                    }}
                />
            </div>
            <div className={classes.box50}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"E-mail:":"E-mail:"}
                    onChange={(event)=>{
                        setEmail(event.target.value)
                        setValueYur(getValues())
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
                        setValueYur(getValues())
                    }}
                />
            </div>
            <div className={classes.box50}>
                <MuiPhoneNumber
                    defaultCountry={'uz'}
                    onChange={(value) => {
                        setPhone2(value)
                        setValueYur(getValues())
                    }}
                />
            </div>
        </div>
        <div className={classes.box}>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Uy:":"Дом:"}
                    onChange={(event)=>{
                        setHouse(event.target.value)
                        setValueYur(getValues())
                    }}
                />
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Kvartira:":"Квартира:"}
                    onChange={(event)=>{
                        setAparment(event.target.value)
                        setValueYur(getValues())
                    }}
                />
                
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Poch.ind:":"Поч.инд:"}
                    onChange={(event)=>{
                        setPostcode(event.target.value)
                        setValueYur(getValues())
                    }}
                />
            </div>
            <div className={classes.box25}>
                <TextField
                    className={classes.input100}
                    label={(globalState.language==="uz")?"Faks:":"Факс:"}
                    onChange={(event)=>{
                        setFax(event.target.value)
                        setValueYur(getValues())
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
                                setValueYur(getValues())
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
                    setValueYur(getValues())
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