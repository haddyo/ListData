import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

// Page layouts
import UserProfile from "./Components/layouts/UserProfile";
import Home from "./Components/layouts/Home";


function PrivateRoutes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/userProfile" component={UserProfile} />
    </Switch>
  );
}

export default PrivateRoutes;
