/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@/common/utils';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<App />
		</BrowserRouter>
	</ThemeProvider>,
);
