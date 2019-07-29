import {
  API_ENDPOINT_COLOR,
  API_ENDPOINT_MANUFACTURERS,
  API_ENDPOINT_CAR_DETAILS
} from "../common/constants";

export const sendAPIRequest = options => {
  let url = options.url;
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(e => {
      return Promise.reject({
        error: true,
        errorDetails: e
      });
    });
};

export const fetchColors = () => {
  return sendAPIRequest({ url: API_ENDPOINT_COLOR }).then(
    json => json.colors
  );
};

export const fetchManufacturers = () => {
  return sendAPIRequest({ url: API_ENDPOINT_MANUFACTURERS }).then(
    json => json.manufacturers
  );
};

export const getCarDetails = stockNumber => {
  return sendAPIRequest({
    url: `${API_ENDPOINT_CAR_DETAILS}/${stockNumber}`
  }).then(json => json.car);
};

export const getCarList = querystring => {
  return sendAPIRequest({
    url: `${API_ENDPOINT_CAR_DETAILS}${querystring ? "?" + querystring : ""}`
  }).then(json => json);
};
