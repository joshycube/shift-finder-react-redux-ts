import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainScene from "./scenes/main";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <MainScene />} />
      </Switch>
    </Router>
  );
}

export default Routes;
