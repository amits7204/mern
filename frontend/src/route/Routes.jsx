import React from "react";
import { Route, Switch } from "react-router-dom";
import UsersCreateandEdit from "../component/UsersCreateandEdit";
import Users from "../component/Users";
import Home from "../component/Home";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/modifie" exact component={UsersCreateandEdit} />
        <Route path="/modifie/:id" exact component={UsersCreateandEdit} />
      </Switch>
    </>
  );
}
