import React from "react";
import { Route, Switch } from "react-router-dom";
import AddUser from "../component/AddUser";
import Users from "../component/Users";
import UpdateUser from "../component/UpdateUser";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/adduser" exact component={AddUser} />
        <Route path="/updateuser" exact component={UpdateUser} />
      </Switch>
    </>
  );
}
