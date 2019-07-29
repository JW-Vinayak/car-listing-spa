import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import Loading from "./components/Loading/loadingView";

const HomePage = lazy(() => import("./components/Pages/HomePage/homePageView"));

const CarDetailsPage = lazy(() =>
  import("./components/Pages/CarDetailsPage/carDetailsPageView")
);

const PageNotFoundPage = lazy(() =>
  import("./components/Pages/NotFoundPage/notFoundPageView")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/car/:stockNumber" component={CarDetailsPage} />
          <Route path="*" component={PageNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
