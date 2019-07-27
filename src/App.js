import React from "react";
import "./styles/styles.scss";
import CarList from "./components/CarList/carListContainer";
import Filters from "./components/Filters/filterContainer";
import Pagination from "./components/Paginator/paginatorContainer";
import Sorter from "./components/Sorter/sorterContainer";
import PagingInfo from "./components/PagingInfo/pagingInfoView";
import Header from "./components/Header/headerView";
import Footer from "./components/Footer/footerView";

function App() {
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
}

export default App;
