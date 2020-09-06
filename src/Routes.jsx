import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

// Page layouts
import Dashboard from "./Components/layouts/Dashboard";
import Home from "./Components/layouts/Home";


function PrivateRoutes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default PrivateRoutes;
