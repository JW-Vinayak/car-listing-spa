import React from "react";
import "./styles/styles.scss";
import CarList from "./components/CarList/carListContainer";
import Filters from "./components/Filters/filterContainer";
import Pagination from "./components/Paginator/paginatorContainer";
import Sorter from "./components/Sorter/sorterContainer";
import PagingInfo from "./components/PagingInfo/pagingInfoView";
function App() {
  return (
    <div className="App">
      <Filters />
      <div className="car-list">
        <PagingInfo />
        <Sorter />
        <CarList />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
