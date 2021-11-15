import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { globalState, setCustomer } from './../globalState';
import { observer } from "mobx-react";
import Customer from "./Customer";
import CustomerYur from "./CustomerYur";
import SearchCostumer from "./SearchCostumer";
import axios from "../baseUrl";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    margin: "0 auto"
  },
}));

const YurFizCustumer = ({nextStep,nextButton}) => {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [pressedButton, setPressedButton] = React.useState(false);
  const [valueYur, setValueYur] = React.useState({});
  const [valueFiz, setValueFiz] = React.useState({});
  const [openFizError, setOpenFizError] = React.useState(false);
  const [openYurError, setOpenYurError] = React.useState(false);

  React.useEffect(()=>{
    if(pressedButton != false){
      let queryBody = [];
      console.log(value);
      if(value == 0){
        queryBody = valueYur;
      }else{
        queryBody = valueFiz;
      }

      axios.post(
        `/add_client`,
        queryBody
      )
      .then((response) => {
        alert("Malumotlarni saqlash muvoffaqqiyatli bajarildi");
        setOpenYurError(false);
        setOpenFizError(false);
        if(value == 0){
          setCustomer("yur");
        }else{
          setCustomer("fiz");
        }
        nextStep();
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
        if(value == 0){
          setOpenYurError(true);
        }else{
          setOpenFizError(true);
        }
      });

    }
    setPressedButton(true);
  },[nextButton])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
        boxShadow={2}
        bgcolor="background.paper"
        p={1}
        mt={1}
        className={classes.root}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{boxShadow: " #fff 0 0 0 0 0"}}
        >
          <Tab label={globalState.language == "ru" ? "юридическое лицо" : "yuridik shaxs"} {...a11yProps(0)} />
          <Tab label={globalState.language == "ru" ? "физическое лицо" : "fizik shaxs"} {...a11yProps(1)} />
          <Tab label={globalState.language == "ru" ? "Поиск клиентов" : "Mijozlarni izlash"} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <div value={value} index={0} dir={theme.direction}>
          <CustomerYur
            setValueYur={setValueYur}
            openError={openYurError}
          />
        </div>
        <div value={value} index={1} dir={theme.direction}>
          <Customer
            setValueFiz={setValueFiz}
            openError={openFizError}
          />
        </div>
        <div value={value} index={2} dir={theme.direction}>
          <SearchCostumer/>
        </div>
      </SwipeableViews>
    </Box>
  );
}

export default  observer(YurFizCustumer);