import { styled, Grid, Stack } from '@mui/material';

const Wrap = styled(Grid)(({ theme }) => ({
	padding: '20px',
	minHeight: '300px',
}));
const TopContainer = styled(Stack)(({ theme }) => ({
	gap: theme.spacing(3),
	display: 'flex',
	flexDirection: 'column',
	marginBottom: theme.spacing(3),
	div: {
		width: '100%',
	},
	input: {
		overflow: 'hidden',
	},
	fieldset: {
		background: theme.palette.primary.main,
		borderRadius: theme.spacing(3),
		border: 'none',
		opacity: 0.8,
	},
	textarea: {
		minHeight: '300px',
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
