let key = "favorite-car";

const getFavoriteCars = () => {
  return localStorage.getItem(key) ? localStorage.getItem(key).split(",") : [];
};

const setFavoriteCars = favoriteCars => {
  localStorage.setItem(key, favoriteCars.toString());
};

export const setCarAsFavorite = value => {
  let favoriteCars = getFavoriteCars();
  if (favoriteCars) {
    favoriteCars = favoriteCars.concat(value);
  } else {
    favoriteCars = [value];
  }
  setFavoriteCars(favoriteCars);
};

export const hasCarAsFavorite = value => {
  let favoriteCars = getFavoriteCars();
  return favoriteCars.indexOf(value) !== -1;
};

export const removeCarAsFavorite = value => {
  let favoriteCars = getFavoriteCars();
  if (favoriteCars) {
    let index = favoriteCars.indexOf(value);
    if (index >= 0) {
      favoriteCars.splice(index, 1);
    }
  }
  setFavoriteCars(favoriteCars);
};
