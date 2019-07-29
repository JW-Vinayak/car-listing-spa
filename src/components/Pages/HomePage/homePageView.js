import React from "react";
import CarList from "../../CarList/carListContainer";
import Filters from "../../Filters/filterContainer";
import Pagination from "../../Paginator/paginatorContainer";
import Sorter from "../../Sorter/sorterContainer";
import PagingInfo from "../../PagingInfo/pagingInfoView";
import { WithHeaderAndFooter } from "../../../utils/composition";

export const HomePage = () => {
  return (
    <WithHeaderAndFooter>
      <div className="home-page-content">
        <Filters />
        <div className="car-list-area">
          <PagingInfo />
          <Sorter />
          <CarList />
          <Pagination />
        </div>
      </div>
    </WithHeaderAndFooter>
  );
};

export default HomePage;
