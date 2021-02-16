import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
		},
	})
);

function SubjectColor(): JSX.Element {
	const classes = useStyles();
	return <>{console.log('Hello')}</>;
}

export default SubjectColor;
