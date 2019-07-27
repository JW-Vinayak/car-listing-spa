import React from "react";
import ColorFilter from "./Color/colorView";
import ManufacturerFilter from "./Manufacturer/manufacturerView";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      color: null,
      manufacturer: null
    };
  }

  setColorFilter(color) {
    this.setState({ color: color });
  }

  setManufacturerFilter(manufacturer) {
    this.setState({ manufacturer: manufacturer });
  }

  applyFilter() {
    console.log("current filters are", this.state);
    this.props.setPageNumber(1);
    this.props.setFilter(this.state);
  }

  render() {
    return (
      <div className="filters">
        <div className="filter">
          <span className="filter-name">Color</span>
          <ColorFilter onChange={value => this.setColorFilter(value)} />
        </div>

        <div className="filter">
          <span className="filter-name">Manufacturer</span>
          <ManufacturerFilter
            onChange={value => this.setManufacturerFilter(value)}
          />
        </div>

        <button
          className="apply-button button"
          onClick={() => this.applyFilter()}
        >
          APPLY
        </button>
      </div>
    );
  }
}

export default Filter;
