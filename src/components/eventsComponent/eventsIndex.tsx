import React from 'react';

import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemAvatar,
	IconButton,
	Avatar,
	Checkbox,
	Fab,
} from '@material-ui/core';

import { Add, Delete } from '@material-ui/icons';

import readAllSubjects from '../../api/subjectsAPI';

import EventsDialog from './eventsDialog';

function EventsTab(): JSX.Element {
	const [dialog, setDialog] = React.useState(false);
	const [checked, setChecked] = React.useState<string[]>([]);

	const subjects = readAllSubjects();

	function openDialog() {
		setDialog(true);
	}

	function closeDialog() {
		setDialog(false);
	}

	const handleToggle = (value: string) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List>
			{subjects.map((subject) => {
				const events = subject.events;

				return events.map((event) => {
					return (
						<>
							<ListItem
								key={event._id}
								role={undefined}
								dense
								button
								onClick={openDialog}
							>
								<ListItemAvatar>
									<Avatar>
										<div
											style={{
												width: '100%',
												height: '100%',
												background: '#d50000',
											}}
										></div>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									className='eventDate'
									primary={`Thu`}
									secondary={`28 Jan`}
								/>
								<ListItemText primary={event.name} secondary={subject.name} />
								<ListItemIcon>
									<Checkbox
										edge='end'
										// checked={checked.indexOf(value) !== -1}
										tabIndex={-1}
										disableRipple
										onMouseDown={(evt) => {
											evt.stopPropagation();
										}}
										onClick={(evt) => {
											handleToggle(event._id);
											evt.stopPropagation();
										}}
									/>
								</ListItemIcon>

								<ListItemIcon>
									<IconButton edge='end' aria-label='delete'>
										<Delete
											onMouseDown={(evt) => {
												evt.stopPropagation();
											}}
										/>
									</IconButton>
								</ListItemIcon>
							</ListItem>
							<EventsDialog
								isOpen={dialog}
								onClose={closeDialog}
								subject={subject.name}
								event={event}
							/>
						</>
					);
				});
			})}
			<Fab className='fabLeft' color='primary' aria-label='add'>
				<Add />
			</Fab>
		</List>
	);
}

export default EventsTab;
