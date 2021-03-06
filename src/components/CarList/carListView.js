import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./carListStyle.scss";
import CarItem from "./CarItem/CarItemView";

export default function CarList(props) {
  let { filters, fetchCars, pagination, mileage, error, loading, cars } = props;

  useEffect(() => {
    fetchCars();
  }, [filters, pagination, mileage]);

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
  return (
    <div className="car-list">
      {cars && cars.map(car => <CarItem key={car.stockNumber + car.modelName} car={car} />)}
    </div>
  );
}

CarList.propTypes = {
  filters: PropTypes.object.isRequired,
  fetchCars: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
  mileage: PropTypes.string.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  cars: PropTypes.array.isRequired
};
