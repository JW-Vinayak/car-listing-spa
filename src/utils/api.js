export const fetchColors = () => {
  let url = "http://localhost:3001/colors";
  return fetch(url)
    // .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      console.log("data is fetched", json);
      return json.colors;
    })
    .catch(error => console.log(error));
};

export const fetchManufacturers = () => {
  let url = "http://localhost:3001/manufacturers";
  return fetch(url)
    // .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json.manufacturers;
    })
    .catch(error => console.log(error));
};


export const getCarDetails = (stockNumber) => {
  let url = `http://localhost:3001/cars/${stockNumber}`;
  console.log('sending fetch request for ', url)
  return fetch(url)
    // .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      console.log('response is', json)
      return json.car;
    })
    .catch(e => {
      console.log('handle rejected', e)
      return Promise.reject({
        error: true,
        errorDetails: e
      })
    })
}

function handleErrors(response) {
  console.log('handle errors', response)
  if (!response.ok) {
    Promise.reject(response);
  }
  return response;
}
