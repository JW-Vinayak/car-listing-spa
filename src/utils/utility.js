import {
  ASCENDING_MILEAGE_SORTING,
  DESCENDING_MILEAGE_SORTING
} from "../common/constants";

export const formQueryString = params => {
  return Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
};

export const sortCars = (cars, mileage) => {
  let modifiedCarList = [];
  if (mileage === ASCENDING_MILEAGE_SORTING) {
    modifiedCarList = cars
      .slice()
      .sort((carA, carB) => carA.mileage.number - carB.mileage.number);
  } else if (mileage === DESCENDING_MILEAGE_SORTING) {
    modifiedCarList = cars
      .slice()
      .sort((carA, carB) => carB.mileage.number - carA.mileage.number);
  } else {
    modifiedCarList = cars.slice();
  }
  return modifiedCarList;
};
