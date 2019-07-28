import React, { useState } from 'react';
import {
  NO_MILEAGE_SORTING,
  ASCENDING_MILEAGE_SORTING,
  DESCENDING_MILEAGE_SORTING
} from '../../common/constants';

const Sorter = (props) => {
  let [sortOrder, setSortOrder] = useState('none');
  let { setSortOrderInStore } = props;

  let handleChange = (event) => {
    console.log('sort value', sortOrder, ASCENDING_MILEAGE_SORTING);
    setSortOrder(event.target.value);
    setSortOrderInStore(event.target.value);
  }

  return (
    <div className="sorter">
      <p class="sort-by-text">Sort by</p>
      <select className="filter-dropdown sort-dropdown" value={sortOrder} onChange={(e) => handleChange(e)}>
        <option value={NO_MILEAGE_SORTING}>None</option>
        <option value={ASCENDING_MILEAGE_SORTING}>Mileage Ascending</option>
        <option value={DESCENDING_MILEAGE_SORTING}>Mileage Descending</option>
      </select>
    </div>
  )
}

export default Sorter;
