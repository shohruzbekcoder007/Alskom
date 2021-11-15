import React from 'react'
import ComparatorSortingGrid from "./ComparatorSortingGrid"
import { makeStyles } from '@material-ui/core/styles';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    useLocation
  } from "react-router-dom";
import AddCustomerType from '../minComponents/AddCustomerType';
import PortfelStepper from './PortfelStepper';
import PortfelStepperNs from './PortfelStepperNs';
import PortfelStepperBonus from './PortfelStepperBonus';
import PortfelStepperRenta from './PortfelStepperRenta';


const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    portfolioHeader: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0"
    }
})

export default function MainPortfel() {

    const classes = useStyles();
    let match = useRouteMatch();

    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path={match.path}>
                    <div className={classes.portfolioHeader}>
                        <div></div>
                        <AddCustomerType/>
                    </div>
                    <ComparatorSortingGrid/>
                </Route>
                <Route path={`${match.path}/:customerCode`}>
                    <CustomerCode/>
                </Route>
            </Switch>
        </div>
    )
}

const CustomerCode = () => {

    let { customerCode } = useParams();
    let location = useLocation();

    if(''+customerCode === 'insCom1')
        return <PortfelStepper texts={location.state.elem}/>
    if(''+customerCode === 'insCom2')
        return <PortfelStepperNs texts={location.state.elem}/>
    if(''+customerCode === 'insCom3')
        return <PortfelStepperBonus texts={location.state.elem}/>
    if(''+customerCode === 'insCom4')
        return <PortfelStepper texts={location.state.elem}/>
    if(''+customerCode === 'insCom5')
        return <PortfelStepperRenta texts={location.state.elem}/>
    else 
        return <p>{'bu tur hali aniqlanmagan'}</p>
}