import { styled, Grid, Stack } from '@mui/material';

const Wrap = styled(Grid)(({ theme }) => ({
	minHeight: '300px',
}));
const TopContainer = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(3),
	display: 'flex',
	flexDirection: 'column',
	marginBottom: theme.spacing(3),
	div: {
		width: '100%',
		fontSize: '1.2rem',
	},
	input: {
		overflow: 'hidden',
		zIndex: 2,
	},
	fieldset: {
		background: theme.palette.primary.main,
		borderRadius: theme.spacing(3),
		border: 'none',
		opacity: 0.8,
	},
	textarea: {
		zIndex: 2,
		minHeight: '300px',
		'&::placeholder': {
			fontSize: '1.2rem',
		},
	},
}));
const ButtonContaier = styled(Stack)(({ theme }) => ({
	alignItems: 'center',
	textAlign: 'center',
}));
export const Styles = {
	Wrap,
	TopContainer,
	ButtonContaier,
};
