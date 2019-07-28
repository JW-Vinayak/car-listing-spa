import React from "react";
import ColorFilter from "./Color/colorView";
import ManufacturerFilter from "./Manufacturer/manufacturerView";
import { withErrorBoundary } from "../../utils/composition";
import PropTypes from "prop-types";

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
          {withErrorBoundary(
            <ColorFilter onChange={value => this.setColorFilter(value)} />
          )}
        </div>

        <div className="filter">
          <span className="filter-name">Manufacturer</span>
          {withErrorBoundary(
            <ManufacturerFilter
              onChange={value => this.setManufacturerFilter(value)}
            />
          )}
        </div>

        <button
          className="apply-button button"
          onClick={() => this.applyFilter()}
        >
          Filter
        </button>
      </div>
    );
  }
}

Filter.propTypes = {
  setPageNumber: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default Filter;
