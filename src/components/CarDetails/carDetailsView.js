import React from "react";
import { getCarDetails } from "../../utils/api";
import SetFavoriteCarView from "./FavoriteCar/favoriteCarView";
import PropTypes from "prop-types";

class CarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carDetails: null,
      error: false
    };
  }

  componentDidMount() {
    getCarDetails(this.props.match.params.stockNumber)
      .then(details => {
        this.setState({
          carDetails: details
        });
      })
      .catch(e => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error error-box">
          An error occurred while fetching car details, please try again after
          some time.
        </div>
      );
    }
    if (!this.state.carDetails) {
      return <div className="error-box">Data is Loading...</div>;
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
            <SetFavoriteCarView {...car} />
          </div>
        </section>
      </section>
    );
  }
}

CarDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })
};

export default CarDetails;
