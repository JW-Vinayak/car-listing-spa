import React from "react";
import { fetchCars } from "./carListActions";
import './carListStyle.scss';

export default class CarList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCars());
  }

  render() {
    console.log(this.props, "props");
    const { error, loading, cars } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    console.log("cars", cars);
    return (
      <ul>
        {cars &&
          cars.map(car => (
            <li className="car-list" key={car.stockNumber}>
              <img alt="a car" className="car-image" src={car.pictureUrl} />
              {`${car.modelName} - ${car.color} - ${
                car.manufacturerName
              } - ${car.mileage.number + " " + car.mileage.unit}`}{" "}
              {}
            </li>
          ))}
      </ul>
    );
  }
}
