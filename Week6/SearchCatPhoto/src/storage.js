export const storage = window.sessionStorage;

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key);

    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (error) {
    return defaultValue;
  }
};
export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value));
};
