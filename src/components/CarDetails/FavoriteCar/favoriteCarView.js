import React, { useState, Fragment } from "react";
import * as localStorage from "../../../utils/localStorage";
import PropTypes from "prop-types";

const FavoriteCarSetting = props => {
  let { stockNumber } = props;
  let key = stockNumber.toString();
  let [isStored, setIsStored] = useState(localStorage.hasCarAsFavorite(key));
  let content;

  let removeItem = () => {
    localStorage.removeCarAsFavorite(key);
    setIsStored(false);
  };

  let setItem = () => {
    localStorage.setCarAsFavorite(key);
    setIsStored(true);
  };
  if (!isStored) {
    content = (
      <Fragment>
        <p>
          if you like this car, click the button and save it in your collection
          of favourite items.
        </p>
        <button className="button favorite" onClick={() => setItem()}>
          Save
        </button>
      </Fragment>
    );
  } else {
    content = (
      <Fragment>
        <p>
          if you wish, you can click the button and remove this car from your
          collection of favourite items.
        </p>
        <button className="button favorite" onClick={() => removeItem()}>
          Remove
        </button>
      </Fragment>
    );
  }

  return content;
};

FavoriteCarSetting.propTypes = {
  stockNumber: PropTypes.number.isRequired
};

export default FavoriteCarSetting;
