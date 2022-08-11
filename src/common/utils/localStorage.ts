const getLocalStorage = <T>(key: string): T | string => {
	const value = window.localStorage.getItem(key);
	return value ? JSON.parse(value) : '';
};

const setLocalStorage = <T>(key: string, value: T) => {
	window.localStorage.setItem(key, JSON.stringify({ [key]: value }));
};

const removeLocalStorage = (key: string) => {
	window.localStorage.removeItem(key);
};

const localStorage = {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
};

export default localStorage;
