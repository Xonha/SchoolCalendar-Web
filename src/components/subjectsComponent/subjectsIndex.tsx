import React from 'react';
import Subjects from '../../api/subjectsAPI';
import SubjectsDialog from '../subjectsComponent/subjectsDialog';
import { Delete, Add } from '@material-ui/icons';
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemAvatar,
	IconButton,
	Avatar,
	Fab,
} from '@material-ui/core';

function SubjectsList(): JSX.Element {
	const [dialog, setDialog] = React.useState(false);

	const subjects = Subjects();

	function openDialog() {
		setDialog(true);
	}

	function closeDialog() {
		setDialog(false);
	}

	return (
		<List>
			{subjects.map((subject) => {
				return (
					<>
						<ListItem button dense key={subject._id} onClick={openDialog}>
							<ListItemAvatar>
								<Avatar />
							</ListItemAvatar>

							<ListItemText
								id={subject._id}
								primary={subject.name}
								secondary={subject.teacherName}
							/>

							<ListItemIcon>
								<IconButton edge='end'>
									<Delete
										onClick={(event) => {
											event.stopPropagation();
										}}
									/>
								</IconButton>
							</ListItemIcon>
						</ListItem>

						<SubjectsDialog
							isOpen={dialog}
							onClose={closeDialog}
							subject={subject}
						/>
					</>
				);
			})}
			<Fab className='fabLeft' color='primary'>
				<Add />
			</Fab>
		</List>
	);
}

export default SubjectsList;
