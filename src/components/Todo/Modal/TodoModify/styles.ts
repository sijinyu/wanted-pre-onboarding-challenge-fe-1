import { Stack, styled, Typography, DialogActions } from '@mui/material';

const Wrap = styled(Stack)(({ theme }) => ({
	background: 'white',
	minWidth: '500px',
	minHeight: '300px',
	padding: theme.spacing(3),
	'& fieldset': {
		border: 'none',
	},
	'& .MuiFormControl-root': {
		border: '1px solid #dbdbdb',
	},
}));
const Header = styled(Stack)(({ theme }) => ({
	padding: theme.spacing(1),
	flexDirection: 'row',
	justifyContent: 'flex-end',
	gap: theme.spacing(2),
}));

const Content = styled(Stack)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));
const ActionArea = styled(DialogActions)(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(2),
	padding: 0,
}));

export const Styles = {
	Wrap,
	Header,
	Content,
	ActionArea,
};
