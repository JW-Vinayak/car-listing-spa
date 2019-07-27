export const setItem = key => {
  localStorage.setItem(key, true);
};

export const hasItem = key => {
  return localStorage.getItem(key) !== null;
};

export const removeItem = key => {
  localStorage.removeItem(key);
};
