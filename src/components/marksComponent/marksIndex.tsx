import React from 'react';

import { Add, Delete, ExpandLess, ExpandMore } from '@material-ui/icons';

import {
	createStyles,
	makeStyles,
	Theme,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemAvatar,
	IconButton,
	Avatar,
	Collapse,
	Fab,
} from '@material-ui/core';

import Subjects from '../../api/subjectsAPI';

import MarksDialog from '../marksComponent/marksDialog';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		nested: {
			paddingLeft: theme.spacing(4),
			fontSize: '0.875em',
			backgroundColor: theme.palette.divider,
			textAlign: 'right',
		},
	})
);

function MarksTab(): JSX.Element {
	const classes = useStyles();
	const subjects = Subjects();

	const [nestedList, openNestedList] = React.useState<Array<number>>([]);
	const [dialog, setDialog] = React.useState<Array<number>>([]);

	function handleOpenDialog(index: number) {
		if (dialog.findIndex((d) => d === index) > -1) return true;
		else return false;
	}

	function handleDialog(index: number) {
		if (dialog.findIndex((d) => d === index) > -1) {
			setDialog(dialog.filter((d) => d !== index));
		} else {
			setDialog((d) => [...d, index]);
		}
	}

	function handleNestedList(index: number) {
		if (nestedList.findIndex((o) => o === index) > -1) {
			openNestedList(nestedList.filter((o) => o !== index));
		} else {
			openNestedList((openArray) => [...openArray, index]);
		}
	}

	function handleExpandIcon(index: number, marks: any) {
		if (nestedList.findIndex((o) => o === index) > -1 && marks.length !== 0)
			return true;
		else return false;
	}

	return (
		<List component='nav' aria-labelledby='nested-list-subheader'>
			{subjects.map((subject, subjectIndex) => {
				const marks = subject.marks;

				return (
					<>
						<ListItem
							key={subject._id}
							role={undefined}
							onClick={() => handleNestedList(subjectIndex)}
							dense
							button
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
							{handleExpandIcon(subjectIndex, subject.marks) ? (
								<ExpandLess />
							) : (
								<ExpandMore />
							)}
							<ListItemText
								id={subject._id}
								primary={subject.name}
								secondary={subject.teacherName}
							/>

							<ListItemIcon>
								<IconButton edge='end' aria-label='delete'>
									<Delete />
								</IconButton>
							</ListItemIcon>
						</ListItem>

						<Collapse
							in={nestedList.findIndex((o) => o === subjectIndex) > -1}
							timeout='auto'
							unmountOnExit
						>
							<List component='div' disablePadding>
								{marks.map((mark, markIndex) => (
									<>
										<ListItem
											button
											onClick={() => handleDialog(markIndex)}
											className={classes.nested}
										>
											<ListItemText primary={mark.title} />
											<ListItemText primary={mark.value} secondary='Valor' />
											<ListItemText primary={mark.weight} secondary='Peso' />
										</ListItem>
										<MarksDialog
											isOpen={handleOpenDialog(markIndex)}
											onClose={() => handleDialog(markIndex)}
											marks={mark}
											subject={subject.name}
										/>
									</>
								))}
							</List>
						</Collapse>
					</>
				);
			})}
			<Fab className='fabLeft' color='primary'>
				<Add />
			</Fab>
		</List>
	);
}

export default MarksTab;
