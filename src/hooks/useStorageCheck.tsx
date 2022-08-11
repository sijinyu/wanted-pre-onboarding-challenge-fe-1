import { useEffect, useState } from 'react';
import { localStorage } from '@/common/utils';

interface ParameterType {
	key: string;
}
// interface IItems {
// 	value: string | undefined;
// }
const useStorageCheck = ({ key }: ParameterType) => {
	const [items, setItems] = useState<string>();

	useEffect(() => {
		const value: string = localStorage.getLocalStorage(key) || '';
		if (value) {
			setItems(value);
		}
	}, [key]);
	return { items };
};

export default useStorageCheck;
