import React, { useMemo, useState } from 'react';

import Calendar from '../components/calendar';
import TimeTable from '../components/timetable';
import Events from '../components/events';
import Subjects from '../components/subjects';
import Marks from '../components/marks';

import Navbar from '../components/navbar';
import { leftStateEnum, rightStateEnum } from '../utils/LeftAndRightEnums';

export default function Home(): JSX.Element {
	const [leftState, setLeftState] = useState<leftStateEnum>(
		leftStateEnum.timetable
	);

	const [rightState, setRightState] = useState<rightStateEnum>(
		rightStateEnum.events
	);

	const leftRoutes = useMemo(() => {
		switch (leftState) {
			case leftStateEnum.timetable:
				return <TimeTable />;
			case leftStateEnum.calendar:
				return <Calendar />;
			default:
				console.log('algo de muito errado nao deu certo');
				return <> </>;
		}
	}, [leftState]);

	const rightRoutes = useMemo(() => {
		switch (rightState) {
			case rightStateEnum.events:
				return <Events />;

			case rightStateEnum.subjects:
				return <Subjects />;

			case rightStateEnum.marks:
				return <Marks />;

			default:
				console.log('algo de muito errado nao deu certo');
				return <> </>;
		}
	}, [rightState]);

	return (
		<div>
			<Navbar changeLeft={setLeftState} changeRight={setRightState} />
			<div className='dividedContainer'>
				{leftRoutes}
				{rightRoutes}
			</div>
		</div>
	);
}
