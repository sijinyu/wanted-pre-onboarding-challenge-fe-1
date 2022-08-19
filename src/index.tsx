/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@/common/utils';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<ThemeProvider theme={theme}>
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		<BrowserRouter>
			<CssBaseline />

			<App />
		</BrowserRouter>
	</ThemeProvider>,
);
