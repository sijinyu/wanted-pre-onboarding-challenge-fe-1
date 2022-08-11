/* eslint-disable @typescript-eslint/no-shadow */
import { ChangeEvent, useState } from 'react';

interface IuseInput {
	initialValue: string | number;
	validator?: (value: string) => boolean;
}
const useInput = ({ initialValue, validator }: IuseInput) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = event;
		if (validator === undefined) {
			setValue(value);
		} else {
			const willdata = validator(value);
			if (willdata) {
				setValue(value);
			}
		}
	};
	return { value, onChange };
};

export default useInput;
