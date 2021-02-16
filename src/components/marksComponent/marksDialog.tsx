import React from 'react';
import {
	Dialog,
	Button,
	TextField,
	Grid,
	DialogContent,
	DialogActions,
} from '@material-ui/core';

interface IMarksDialog {
	isOpen: boolean;
	onClose: () => void;
	subject: string;
	marks: {
		_id: string;
		title: string;
		value: number;
		weight: number;
		description: string;
	};
}

function marksDialog(props: IMarksDialog): JSX.Element {
	return (
		<>
			<Dialog open={props.isOpen} onClose={props.onClose}>
				<DialogContent>
					<Grid container spacing={3}>
						<Grid item xs={9}>
							<TextField
								label='Title'
								defaultValue={props.marks.title}
								type='text'
								required
							/>
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
						<Grid item xs={12} sm={6}>
							<TextField
								label='Subject'
								defaultValue={props.subject}
								type='text'
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								label='Mark'
								defaultValue={props.marks.value}
								type='list'
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<TextField
								label='Weight'
								defaultValue={props.marks.weight}
								type='list'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label='Description'
								defaultValue={props.marks.description}
								rows={5}
								multiline
							/>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default marksDialog;
