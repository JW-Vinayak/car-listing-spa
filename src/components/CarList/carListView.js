import React from "react";
import { fetchCars } from "./carListActions";
import "./carListStyle.scss";
import CarItem from "./CarItem/CarItemView";

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
      <div>
        {cars && cars.map(car => <CarItem key={car.stockNumber} car={car} />)}
      </div>
    );
  }
}
