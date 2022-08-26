import { KeyboardEvent } from 'react';

const enterKeyEvent = (
	e: KeyboardEvent<HTMLDivElement>,
	submit: () => void,
) => {
	console.log(e.key, '--');
	if (e.key === 'Enter') {
		submit();
	}
};

const Utils = {
	enterKeyEvent,
};

export default Utils;
