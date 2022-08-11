import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'body > #root > div': {
					height: '100vh',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				colorInherit: {
					color: 'paleturquoise',
				},
			},
		},
	},
});
export default theme;
