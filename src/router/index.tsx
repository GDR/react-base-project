import React, { FunctionComponent, ReactElement } from "react";
import { Route, Switch } from "react-router";
import IndexPage from "~/pages/IndexPage";

const AppRouter: FunctionComponent = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
    </Switch>
  );
};

export default AppRouter;
