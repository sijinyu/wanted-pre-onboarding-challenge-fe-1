import { useState, useCallback, ChangeEvent } from 'react';

interface IuseInputMultiple<T> {
	[key: string]: T;
}

const useInputMultiple = (
	initialForm: IuseInputMultiple<any>,
): [
	IuseInputMultiple<any>,
	(event: ChangeEvent<HTMLInputElement>) => void,
	() => void,
] => {
	const [form, setForm] = useState(initialForm);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const {
				target: { name, value },
			} = event;
			setForm({ ...form, [name]: value });
		},
		[form],
	);
	const reset = useCallback(() => setForm(initialForm), [initialForm]);
	return [form, onChange, reset];
};

export default useInputMultiple;
