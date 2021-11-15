import React from 'react';
import axios from './../baseUrl';
import { observer } from "mobx-react";
import List from '@material-ui/core/List';
import { globalState } from "./../globalState";
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useRouteMatch } from "react-router-dom";
import ListItemText from '@material-ui/core/ListItemText';
import TypeCard from './TypeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexFlow: "wrap"
  },
  inline: {
    display: 'inline',
  },
  itemColor: {
    color: "#000"
  }
}));

const PortfelLinks = () => {

  const classes = useStyles();
  let match = useRouteMatch();
  const [insType, setInsType] = React.useState([]);

  const getInsurance = () => {
    axios.get(`/class_type`)
      .then((res) => {
        setInsType(res.data);
      })
      .catch((error) => {
          console.error(error);
      })
  }

  React.useEffect(()=>{
    getInsurance()
  },[])
  
  return (
    <div className={classes.root}>
      {
        insType.map((elem,index) => {
          return (
            <div key={`${match.url}/${'insCom'+(index)}`}>
              <div alignItems="flex-start">
                <Link
                  to={{
                    pathname: `${match.url}/${'insCom'+(elem.code)}`,
                    state: { elem: elem }
                  }}
                >
                    <TypeCard
                      textTitle={(globalState.language === "ru")?elem.name_ru:elem.name_uz}
                      textBody={(globalState.language === "ru")?elem.text_ru:elem.text_uz}
                    />
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default observer(PortfelLinks);