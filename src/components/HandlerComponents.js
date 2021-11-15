import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPortfel from "./MainPortfel"

export default function HandlerComponents() {
  return (
    <Switch>
        <Route exact path="/">
            <p>Bu home page</p>
        </Route>
        <Route path="/portfel">
            <MainPortfel/>
        </Route>
        <Route path="/link3">
            <p>salom3</p>
        </Route>
        <Route path="/link4">
            <p>salom4</p>
        </Route>
        <Route path="/link5">
            <p>salom5</p>
        </Route>
        <Route path="/link6">
            <p>salom6</p>
        </Route>
        <Route path="/link7">
            <p>salom7</p>
        </Route>
        <Route path="/link8">
            <p>salom8</p>
        </Route>
        <Route path="/link9">
            <p>salom9</p>
        </Route>
    </Switch>
  );
}
