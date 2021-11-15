import 'date-fns';
import React from 'react';
import axios from "../baseUrl";
import { observer } from "mobx-react";
// import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
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
// import MuiPhoneNumber from "material-ui-phone-number";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import SearchBar from "material-ui-search-bar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CustomerTable from '../minComponents/CustomerTable';
import ProgressCustomerSearch from '../minComponents/ProgressCustomerSearch'

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
    boxBody: {
      width: "100%",
    },
    boxSelects: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexFlow: "wrap",
      padding: "10px 0"
    },
    box50: {
        width: "50%",
        padding: "10px 10px"
    },
    input100: {
        width: "100%",
    },
    pagination: {
      textAlign: "center",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "20px 0 0 0"
    }
})

const SearchCostumer = () => {

  const classes = useStyles();
  const [seartchInput, setSearchInput] = React.useState('');
  const [bySearch, setBySearch] = React.useState('2');
  const [byCustomer, setByCustomer] = React.useState('2');
  const [searcher, setSearcher] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [progress, setProgress] = React.useState(true);
  const [count, setCount] = React.useState(0)
  const [tableData, setTableData] = React.useState([])

  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  const getCustomers = () => {

    setProgress(true)
    axios.get(`/filter_client?search_type=${bySearch}&customer_type=${byCustomer}&limit=10&offset=${(page-1)*10}&term=${seartchInput}`)
      .then((res) => {
        console.log(res.data);
        setProgress(false)
        setCount(res.data.count)
        setTableData(res.data.result)
      })
      .catch((error) => {
          console.error(error);
      })

  }

  React.useEffect(()=>{
    getCustomers();
  },[]);

  // if(progress)
  // return (
  //   <ProgressCustomerSearch/>
  // )
  // else 
  return (
    <Grid container>
      <div
        bgcolor="background.paper"
        mt={3}
        className={classes.root}
        style={{padding: "10px"}}
      >
        <div className={classes.box}>
          <SearchBar
            className={classes.input100}
            value={seartchInput}
            onChange={query =>  {setSearchInput(query)}}
            // onChangeText={query =>  {console.log(query)}}
            onRequestSearch={() => setSearcher(!searcher)}
          />
        </div>
        {(searcher)?
        <div className={classes.boxSelects}>
          <div className={classes.box50}>
            <FormControl className={classes.input100}>
              <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={bySearch}
                  onChange={(event)=>{setBySearch(event.target.value)}}
              >
              <MenuItem value={"1"}>{(globalState.language==="ru")?"Bсе колонке":"Barcha ustun"}</MenuItem>
              <MenuItem value={"2"}>{(globalState.language==="ru")?"Наименование":"Nomi"}</MenuItem>
              <MenuItem value={"3"}>{(globalState.language==="ru")?"ИНН":"INN"}</MenuItem>
              <MenuItem value={"4"}>{(globalState.language==="ru")?"Расчетный счет":"Hisob raqami"}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.box50}>
            <FormControl className={classes.input100}>
              <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={byCustomer}
                  onChange={(event)=>{setByCustomer(event.target.value)}}
              >
              <MenuItem value={"1"}>{(globalState.language==="ru")?"Юридическое":"Yuridik"}</MenuItem>
              <MenuItem value={"2"}>{(globalState.language==="ru")?"Физическое":"Fizik"}</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>:<></>}
        <div
          className={classes.box}
          style={{padding: "10px 0", borderBottom: "1px solid #eee"}}
        >
          <div></div>
          <Button
            variant="outlined"
            onClick={() => {getCustomers()}}
          >
            Qidirish
          </Button>
        </div>
        <div
          className={classes.box}
          style={{padding: "10px 0"}}
        >
          <div className={classes.boxBody}>
            {
              (progress)?
              <ProgressCustomerSearch/>:
              <CustomerTable tableData={tableData}/>
            }
          </div>
          <div className={classes.pagination}>
            <Pagination count={Math.ceil(count/10)} page={page} onChange={handleChangePagination} />
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default observer(SearchCostumer);