import React from "react";
import CarList from "../../CarList/carListContainer";
import Filters from "../../Filters/filterContainer";
import Pagination from "../../Paginator/paginatorContainer";
import Sorter from "../../Sorter/sorterContainer";
import PagingInfo from "../../PagingInfo/pagingInfoView";
import { WithHeaderAndFooter } from "../../../utils/composition";

export const HomePage = () => {
  return (
    <WithHeaderAndFooter className="App">
      <Filters />
      <div className="car-list">
        <PagingInfo />
        <Sorter />
        <CarList />
        <Pagination />
      </div>
    </WithHeaderAndFooter>
  );
};

export default HomePage;
