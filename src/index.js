import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ErrorBoundry } from '@BaseComponents';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@Utils';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	// <React.StrictMode>
		<ThemeProvider theme={theme}>
			<ErrorBoundry>
				<Router>
					<App />
				</Router>
			</ErrorBoundry>
		</ThemeProvider>
	// </React.StrictMode>
);


