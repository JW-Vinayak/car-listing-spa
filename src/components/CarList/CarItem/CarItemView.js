import React from "react";

const CarItem = props => {
  let { car } = props;
  return (
    <div className="car-item" key={car.stockNumber}>
      <img alt="a car" className="car-image" src={car.pictureUrl} />
      <div className="car-info">
        <h3 className="car-name">{car.modelName}</h3>
        <div className="car-details">
          <span>Stock # {car.stockNumber} - </span>
          <span>
            {car.mileage.number} {car.mileage.unit.toUpperCase()} -{" "}
          </span>
          <span>{car.fuelType} - </span>
          <span>{car.color}</span>
        </div>
        <a className="view-details-link" href="/#">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CarItem;
