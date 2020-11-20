import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "../component/AddUser";
import Users from "../component/Users";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/adduser" exact component={AddUser} />
      </Switch>
    </>
  );
}
