import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Grid,
	Stack,
	styled,
	Typography,
} from '@mui/material';

const Warp = styled(Box)(({ theme }) => ({
	overflow: 'hidden',
	borderRadius: theme.spacing(3),
}));

const ListContainer = styled(Accordion)(({ theme }) => ({
	background: theme.palette.secondary.main,
	borderRadius: theme.spacing(3),

	opacity: 0.8,
	margin: theme.spacing(2.5),
}));
const ListSummary = styled(AccordionSummary)(({ theme }) => ({}));
const ListDetail = styled(AccordionDetails)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
}));
const Header = styled(Box)(({ theme }) => ({
	marginBottom: theme.spacing(2),
}));
const HeaderTitle = styled(Typography)(({ theme }) => ({
	color: 'white',
	textAlign: 'center',
}));
export const Styles = {
	Warp,
	Header,
	HeaderTitle,
	ListContainer,
	ListSummary,
	ListDetail,
};
