import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	TextField,
} from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';

interface IEventsDialog {
	isOpen: boolean;
	onClose: () => void;
	subject: string;
	event: {
		category: string;
		repetition: string;
		repetitionEnd: null;
		_id: string;
		name: string;
		date: string;
		time: string;
		description: string;
	};
}

function EventsDialog(props: IEventsDialog): JSX.Element {
	// console.log(props);

	return (
		<Dialog open={props.isOpen} onClose={props.onClose}>
			<DialogContent>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<TextField
							label='Event Name'
							defaultValue={props.event.name}
							type='text'
							autoFocus
							required
						>
							{props.event.name}
						</TextField>
					</Grid>
					<Grid item xs={3}>
						<DialogActions>
							<Button
								variant='contained'
								onClick={props.onClose}
								color='primary'
							>
								Save
							</Button>
						</DialogActions>
					</Grid>
					<Grid item xs={12} sm={5}>
						<ColorPicker
							name='color'
							defaultValue='#651fff'
							onChange={(color) => console.log(color)}
						/>
					</Grid>
					<Grid item xs={12} sm={7}>
						<TextField defaultValue={props.subject} label='Subject' />
					</Grid>
					<Grid item xs={12} sm={5}>
						<TextField label='Time' type='time' />
					</Grid>
					<Grid item xs={12} sm={7}>
						<TextField label='Date' type='date' />
					</Grid>
					<Grid item xs={12}>
						<TextField multiline rows={5} label='Description' />
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
}

export default EventsDialog;
