import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import { Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { observer } from "mobx-react";
import { globalState } from './../globalState'

const LeftMenuItems = () => {
    return (
        <>
            <LeftMenuItem
                to={"/"}
                label={(globalState.language == "ru")?"Главная":"Asosiy"}
                iconc={<HomeIcon />}
                activeOnlyWhenExact={true}
            />
            <LeftMenuItem
                to={"/portfel"}
                label={(globalState.language == "ru")?"Портфель":"Portfel"}
                iconc={<BusinessCenterIcon />}
            />
            <LeftMenuItem
                to={"/link3"}
                label="link3"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link4"}
                label="link4"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link5"}
                label="link5"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link6"}
                label="link6"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link7"}
                label="link7"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link8"}
                label="link8"
                iconc={<MailIcon />}
            />
            <LeftMenuItem
                to={"/link9"}
                label="link9"
                iconc={<MailIcon />}
            />
        </>
    )
}

const useStyles = makeStyles({
    linkColor: {
        color: '#000'
    },
    linkColorActive: {
        color: '#3f51b5'
    },
    iconcColor: {
        color: '#3f51b5'
    }
});

const LeftMenuItem = ({to,label, iconc, activeOnlyWhenExact}) => {
    const classes = useStyles();
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });
    return (
        <Link to={to} className={match?classes.linkColorActive:classes.linkColor}>
            <List>
                <ListItem button>
                    <ListItemIcon className={match?classes.iconcColor:""}>{iconc}</ListItemIcon>
                    <ListItemText primary={label} />
                </ListItem>
            </List>
        </Link>
    )
}

export default observer(LeftMenuItems);