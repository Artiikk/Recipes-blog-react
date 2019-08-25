import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import CookingService from "./services/cooking-service";
import { CookingServiceProvider } from "./cooking-context";

import App from "./App";
import ErrorBoundry from "./components/error-boundry";

const cookingService = new CookingService();

ReactDOM.render(
  <ErrorBoundry>
    <CookingServiceProvider value={cookingService}>
      <Router>
        <App />
      </Router>
    </CookingServiceProvider>
  </ErrorBoundry>,
  document.getElementById("root")
);
