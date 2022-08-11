import React from 'react';

interface ButtonProps {
	[key: string]: any;
	children: React.ReactNode;
}
export default function Button({ children, ...rest }: ButtonProps) {
	return <Button>{children}</Button>;
}
