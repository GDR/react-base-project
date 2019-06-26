import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "~/router";
import "~/styles/main.scss";
import withRedux from "~/store";

const Application: FunctionComponent = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default withRedux(Application);
