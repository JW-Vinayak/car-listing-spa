import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./carListStyle.scss";
import CarItem from "./CarItem/CarItemView";
import * as mileageConstants from '../../common/constants';

export default function CarList(props) {
  let { filters, fetchCars, pagination, sorter } = props;
  let modifiedCarList = [];
  console.log("car list props are", props);
  useEffect(() => {
    console.log("calling fetchCars now");
    fetchCars();
  }, [filters, fetchCars, pagination]);

  const { error, loading, cars } = props;

  if (error) {
    return <div class="error error-box">Couldn't load car list from server at this moment, please try again later.</div>;
  }

  if (loading) {
    return (
      <div className="car-list">
        { [...Array(10)].map((e, i) => <CarItem key={i} car={{}} />)}
      </div>
    );
  }

  if (sorter.mileage === mileageConstants.ASCENDING_MILEAGE_SORTING) {
    modifiedCarList = cars.slice().sort((carA, carB) => carA.mileage.number - carB.mileage.number)
  } else if (sorter.mileage === mileageConstants.DESCENDING_MILEAGE_SORTING) {
    modifiedCarList = cars.slice().sort((carA, carB) => carB.mileage.number - carA.mileage.number)
  } else {
    modifiedCarList = cars.slice()
  }

  return (
    <div>
      {modifiedCarList && modifiedCarList.map(car => <CarItem key={car.stockNumber} car={car} />)}
    </div>
  );
}

CarList.propTypes = {
  filters: PropTypes.object
};
