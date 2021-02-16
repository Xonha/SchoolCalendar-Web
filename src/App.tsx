import React from 'react';
import Header from './components/header';
import Styles from './style/Styles';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from './style/Theme';

function App(): JSX.Element {
	return (
		<ThemeProvider theme={Theme}>
			<Header />
			<Styles />
		</ThemeProvider>
	);
}

export default App;
