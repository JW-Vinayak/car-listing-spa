import React from "react";
import { Link } from 'react-router-dom';


const CarItem = props => {
  let { car } = props;
  let content;

  if (car.modelName) {
    content = (
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
          <Link to={`/car/${car.stockNumber}`} className="view-details-link">
            View Details
          </Link>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="car-item" key={car.stockNumber}>
        <div className="empty-box" />
        <div className="car-info">
          <div className="no-car-name" />
          <div className="no-car-details" />
          <div className="no-view-details-link" />
        </div>
      </div>
    );
  }
  return content;
};

export default CarItem;
