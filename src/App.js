import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import HomePage from "./components/Pages/HomePage/homePageView";
import CarDetailsPage from "./components/Pages/CarDetailsPage/carDetailsPageView";
import PageNotFoundPage from "./components/Pages/NotFoundPage/notFoundPageView";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/car/:stockNumber" component={CarDetailsPage} />
        <Route path="*" component={PageNotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
