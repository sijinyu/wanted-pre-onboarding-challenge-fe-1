import { createTheme } from '@mui/material';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'body > #root > div': {
					height: '100vh',
				},
				body: {
					background: '#98e29b',
				},
			},
		},
	},
});
export default theme;
