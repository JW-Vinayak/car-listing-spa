import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import CarList from "./components/CarList/carListContainer";
import Filters from "./components/Filters/filterContainer";
import Pagination from "./components/Paginator/paginatorContainer";
import Sorter from "./components/Sorter/sorterContainer";
import PagingInfo from "./components/PagingInfo/pagingInfoView";
import Header from "./components/Header/headerView";
import Footer from "./components/Footer/footerView";
import CarDetails from "./components/CarDetails/carDetailsView";
import PageNotFoundView from './components/PageNotFound/pageNotFoundView';
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <Filters />
        <div className="car-list">
          <PagingInfo />
          <Sorter />
          <CarList />
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const CarDetailsPage = (props) => {
  return <div>
    <Header></Header>
    <CarDetails {...props}></CarDetails>
    <Footer></Footer>
  </div>;
};

const PageNotFound = () => {
  return <div>
    <Header></Header>
    <PageNotFoundView></PageNotFoundView>
    <Footer></Footer>
  </div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/car/:stockNumber" component={CarDetailsPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
