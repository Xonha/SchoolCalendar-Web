import React from 'react';
import FullCalendar, { DateRangeInput } from '@fullcalendar/react';

import timeGridPlugin from '@fullcalendar/timegrid';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function WeekCalendar(): JSX.Element {
	return (
		<div className='calendarMargin'>
			<div className='halfPage'>
				<FullCalendar
					views={{}}
					plugins={[timeGridPlugin]}
					initialView='timeGridWeek'
					visibleRange={{
						start: new Date(),
						end: new Date(),
					}}
					validRange={{
						start: new Date(),
						end: new Date(),
					}}
				/>
				<Fab className='fabRight' color='primary' aria-label='add'>
					<Add />
				</Fab>
			</div>
		</div>
	);
}

export default WeekCalendar;
