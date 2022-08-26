import { KeyboardEvent } from 'react';

const enterKeyEvent = (
	e: KeyboardEvent<HTMLButtonElement>,
	submit: () => void,
) => {
	if (e.key === 'Enter') {
		submit();
	}
};

const Utils = {
	enterKeyEvent,
};

export default Utils;
