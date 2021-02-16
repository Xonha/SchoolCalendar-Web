import React from 'react';
import ColorPicker from 'material-ui-color-picker';
import {
	Grid,
	TextField,
	DialogContent,
	Dialog,
	Button,
	DialogActions,
} from '@material-ui/core';

interface ISubjectsDialog {
	isOpen: boolean;
	onClose: () => void;
	subject: {
		_id: string;
		name: string;
		color: string;
		teacherName: string;
		schedules: {
			_id: string;
			weekDay: number;
			startDate: string;
			endDate: string;
			room: string;
		}[];
		events: {
			name: string;
			date: string;
			time: string;
			category: string;
			repetition: string;
			repetitionEnd: null;

			description: string;
		}[];
		marks: {
			title: string;
			value: number;
			weight: number;
			description: string;
		}[];
		__v: number;
	};
}

function SubjectsDialog(props: ISubjectsDialog): JSX.Element {
	return (
		<Dialog open={props.isOpen} onClose={props.onClose}>
			<DialogContent>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<TextField
							defaultValue={props.subject.name}
							label='Subject Name'
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
					<Grid item xs={12} sm={4}>
						<ColorPicker
							name='color'
							defaultValue='#000'
							onChange={(color) => console.log(color)}
						/>
					</Grid>

					<Grid item xs={12} sm={8}>
						<TextField
							defaultValue={props.subject.teacherName}
							label="Teacher's Name"
							type='text'
						/>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
}

export default SubjectsDialog;
