import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange } from '@material-ui/core/colors';

export const Theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[500],
		},
		secondary: {
			main: orange[500],
		},
	},
	typography: {
		body1: {
			fontSize: '1em',
		},
		h5: {
			fontFamily: 'Londrina Solid, cursive',
			fontWeight: 900,
		},
	},
	props: {
		MuiTextField: {
			variant: 'outlined',
			margin: 'dense',
			fullWidth: true,
		},
	},
	overrides: {
		MuiListItem: {
			gutters: {
				padding: '4px',
				maxHeight: '56px',
			},
		},
		MuiListItemText: {
			root: {
				textAlign: 'center',
			},
		},
		MuiDialogContent: {
			root: {
				padding: '24px',
			},
		},
		MuiDialogActions: {
			root: {
				padding: '8px 0',
			},
		},
		MuiDialog: {
			paper: {
				overflowY: 'unset',
			},
			paperWidthSm: {
				maxWidth: '400px',
			},
		},
	},
});
