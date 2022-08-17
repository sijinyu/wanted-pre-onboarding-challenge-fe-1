import { createTheme } from '@mui/material';
import images from '@/common/images';

const { mainBg } = images;

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${mainBg})`,
					backgroundPosition: 'center',
					backgroundSize: '100%',
				},
				'body > #root > div': {
					height: '100vh',
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					'&:last-of-type': {
						borderRadius: 'inherit',
					},
					'&:before': {
						height: 0,
					},
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#edd67b',
		},
		secondary: {
			main: '#baccff',
		},
	},
});
export default theme;
