import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  NO_MILEAGE_SORTING,
  ASCENDING_MILEAGE_SORTING,
  DESCENDING_MILEAGE_SORTING
} from "../../common/constants";

const Sorter = props => {
  let { setSortOrderInStore } = props;

  let handleChange = event => {
    setSortOrderInStore(event.target.value);
  };

  return (
    <div className="sorter">
      <p className="sort-by-text">Sort by</p>
      <select
        className="filter-dropdown sort-dropdown"
        value={props.sortOrder}
        onChange={e => handleChange(e)}
      >
        <option value={NO_MILEAGE_SORTING}>None</option>
        <option value={ASCENDING_MILEAGE_SORTING}>Mileage Ascending</option>
        <option value={DESCENDING_MILEAGE_SORTING}>Mileage Descending</option>
      </select>
    </div>
  );
};

Sorter.propTypes = {
  setSortOrderInStore: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired
};

export default Sorter;
