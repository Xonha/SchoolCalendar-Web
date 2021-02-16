import React from 'react';
import FullCalendar from '@fullcalendar/react';
import TableView from '@fullcalendar/daygrid';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function MonthCalendar(): JSX.Element {
	return (
		<div className='calendarMargin'>
			<div className='halfPage'>
				<FullCalendar
					views={{}}
					plugins={[TableView]}
					initialView='dayGridMonth'
				/>
				<Fab className='fabRight' color='primary' aria-label='add'>
					<Add />
				</Fab>
			</div>
		</div>
	);
}

export default MonthCalendar;
