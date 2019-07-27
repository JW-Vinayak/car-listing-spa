import React from "react";
import { getCarDetails } from "../../utils/api";

class CarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carDetails: null
    };
    console.log("car details", props);
  }

  componentDidMount() {
    console.log("sending request now");
    getCarDetails(this.props.match.params.stockNumber).then(details => {
      console.log("car details found", details);
      this.setState({
        carDetails: details
      });
    });
  }

  render() {
    if (!this.state.carDetails) {
      return <div>No data found</div>;
    }
    let car = this.state.carDetails;
    return (
      <section className="car-details">
        <div className="image-container">
          <img
            alt={"car, " + car.modelName}
            className="car-image-big"
            src={car.pictureUrl}
          />
        </div>
        <section>
          <div className="car-info">
            <h1 className="car-name">{car.modelName}</h1>
            <div className="car-info">
              <span>Stock # {car.stockNumber} - </span>
              <span>
                {car.mileage.number} {car.mileage.unit.toUpperCase()} -{" "}
              </span>
              <span>{car.fuelType} - </span>
              <span>{car.color}</span>
            </div>
            <p>
              This car is currently available and can be delivered as soon as
              tomorrow morning.Pleaese be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </p>
          </div>
          <div className="favorite-car">
            Mark this car as favorite
          </div>
        </section>
      </section>
    );
  }
}

export default CarDetails;
