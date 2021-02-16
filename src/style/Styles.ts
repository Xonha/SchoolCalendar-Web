import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		'@global': {
			'*': {
				margin: 0,
			},
			'.MuiFab-root': {
				margin: 0,
				top: 'auto',
				bottom: 20,
				position: 'fixed',
			},
			'.fabLeft': {
				right: 'auto',
				left: 'calc(50% - 20px)',
				transform: 'translate(-100%, 0)',
			},
			'.fabRight': {
				right: 20,
				left: 'auto',
			},
			'.halfPage': {
				width: '100%',
			},
			'.calendarMargin': {
				margin: '20px',
			},
			'.eventDate': {
				width: 'auto',
				flex: 'none',
				paddingRight: '16px',
			},

			'.MuiBackdrop-root': {
				background: 'rgba(0, 0, 0, 0.1)',
			},
			'.TextField-half': {
				width: '100%',
			},
		},
	})
);

const Styles = () => {
	useStyles();

	return null;
};

export default Styles;
