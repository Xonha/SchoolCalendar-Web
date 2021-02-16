import React from 'react';
import Events from './eventsComponent/eventsIndex';
import Subjects from './subjectsComponent/subjectsIndex';
import Marks from './marksComponent/marksIndex';
import Calendar from './calendar';
import Timetable from './timetable';
import {
	AppBar,
	Typography,
	makeStyles,
	createStyles,
	Theme,
	Tabs,
	Tab,
	Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
		},
		appBar: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%',
		},
		pageContainer: {
			width: '100%',
			padding: '0',
			display: 'flex',
		},
		halfPage: {
			width: '100%',
		},

		menuButton: {
			marginRight: theme.spacing(2),
		},

		title: {
			flexGrow: 1,
			position: 'absolute',
			left: '50vw',
			transform: 'translate(-50%, 0)',
		},
	})
);

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			className='halfPage'
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Header(): JSX.Element {
	const classes = useStyles();

	const [valueLeft, setValueLeft] = React.useState(0);
	const [valueRight, setValueRight] = React.useState(1);

	function handleChangeLeft(
		event: React.ChangeEvent<Record<string, unknown>>,
		newValue: number
	) {
		setValueLeft(newValue);
	}

	function handleChangeRight(
		event: React.ChangeEvent<Record<string, unknown>>,
		newValue: number
	) {
		setValueRight(newValue);
	}

	return (
		<nav className={classes.root}>
			<AppBar className={classes.appBar} position='static'>
				<Tabs value={valueLeft} onChange={handleChangeLeft}>
					<Tab label='Events' {...a11yProps(0)} />
					<Tab label='Subjects' {...a11yProps(1)} />
					<Tab label='Marks' {...a11yProps(2)} />
				</Tabs>

				<div className={classes.title}>
					<Typography variant='h5'>Student Calendar</Typography>
				</div>
				<Tabs value={valueRight} onChange={handleChangeRight}>
					<Tab label='Calendar' {...a11yProps(0)} />
					<Tab label='Timetable' {...a11yProps(1)} />
				</Tabs>
			</AppBar>

			<div className={classes.pageContainer}>
				<TabPanel value={valueLeft} index={0}>
					<Events />
				</TabPanel>
				<TabPanel value={valueLeft} index={1}>
					<Subjects />
				</TabPanel>
				<TabPanel value={valueLeft} index={2}>
					<Marks />
				</TabPanel>
				<TabPanel value={valueRight} index={0}>
					<Calendar />
				</TabPanel>
				<TabPanel value={valueRight} index={1}>
					<Timetable />
				</TabPanel>
			</div>
		</nav>
	);
}

export default Header;
