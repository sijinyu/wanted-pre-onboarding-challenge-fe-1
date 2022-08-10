const getLocalStorage = <T>(key: string): T => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : "";
};

const setLocalStorage = <T>(key: string, value: T) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};

export const localStorage = {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
