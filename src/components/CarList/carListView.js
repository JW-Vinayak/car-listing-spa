import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./carListStyle.scss";
import CarItem from "./CarItem/CarItemView";

export default function CarList(props) {
  let { filters, fetchCars, pagination } = props;
  console.log("car list props are", props);
  useEffect(() => {
    console.log("calling fetchCars now");
    fetchCars();
  }, [filters, fetchCars, pagination]);

  const { error, loading, cars } = props;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return (
      <div className="car-list">
        { [...Array(10)].map((e, i) => <CarItem key={i} car={{}} />)}
      </div>
    );
  }

  return (
    <div>
      {cars && cars.map(car => <CarItem key={car.stockNumber} car={car} />)}
    </div>
  );
}

CarList.propTypes = {
  filters: PropTypes.object
};
