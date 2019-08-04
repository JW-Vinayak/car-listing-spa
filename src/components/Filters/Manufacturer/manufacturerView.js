import React, { useEffect, useState } from "react";
import { fetchManufacturers } from "../../../utils/api";
import PropTypes from "prop-types";

const Manufacturer = props => {
  let [manufacturers, setManufacturers] = useState([]);
  let [error, setError] = useState(false);

  function handleChange(event) {
    props.onChange(event.target.value);
  }
  useEffect(() => {
    fetchManufacturers()
      .then(list => {
        setManufacturers(list);
      })
      .catch(e => {
        setError(true);
      });
  }, []);

  // throw network error here so that Error boundaries can capture them and show fallback UI.
  if (error) {
    throw new Error();
  }

  return (
    <select
      className="filter-dropdown"
      value={props.manufacturer}
      onChange={e => handleChange(e)}
    >
      <option name="default" value="">
        All manufacturers
      </option>
      {manufacturers &&
        manufacturers.map((manufacturer, index) => {
          return (
            <option
              name={manufacturer.name}
              value={manufacturer.name}
              key={index}
            >
              {manufacturer.name}
            </option>
          );
        })}
    </select>
  );
};

Manufacturer.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Manufacturer;
