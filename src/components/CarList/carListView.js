import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./carListStyle.scss";
import CarItem from "./CarItem/CarItemView";
import { sortCars } from "../../utils/utility";

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
    return (
      <div class="error error-box">
        Couldn't load car list from server at this moment, please try again
        later.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="car-list">
        {[...Array(10)].map((e, i) => (
          <CarItem key={i} car={{}} />
        ))}
      </div>
    );
  }

  modifiedCarList = sortCars(cars, sorter.mileage);

  return (
    <div className="car-list">
      {modifiedCarList &&
        modifiedCarList.map(car => <CarItem key={car.stockNumber} car={car} />)}
    </div>
  );
}

CarList.propTypes = {
  filters: PropTypes.object.isRequired,
  fetchCars: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
  sorter: PropTypes.object.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  cars: PropTypes.array.isRequired
};
