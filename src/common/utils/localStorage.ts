const getLocalStorage = <T>(key: string): T | string => {
	const value = window.localStorage.getItem(key);
	return value ? JSON.parse(value) : '';
};
const setLocalStorage = async <T>(key: string, value: T) => {
	await window.localStorage.setItem(key, JSON.stringify({ [key]: value }));
};

const removeLocalStorage = async (key: string) => {
	await window.localStorage.removeItem(key);
};

const localStorage = {
	getLocalStorage,
	setLocalStorage,
	removeLocalStorage,
};

export default localStorage;
