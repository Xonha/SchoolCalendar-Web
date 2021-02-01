import React from 'react';
import { leftStateEnum, rightStateEnum } from '../utils/LeftAndRightEnums';

interface INavbar {
	changeLeft: (prop: leftStateEnum) => void;
	changeRight: (prop: rightStateEnum) => void;
}

function Navbar(props: INavbar): JSX.Element {
	const { changeLeft, changeRight } = props;

	return (
		<nav>
			<div className='nav-wrapper color-primary'>
				<ul id='nav-mobile' className='left hide-on-med-and-down'>
					<li>
						<a onClick={() => changeLeft(leftStateEnum.calendar)}>Calendar</a>
					</li>
					<li>
						<a onClick={() => changeLeft(leftStateEnum.timetable)}>Timetable</a>
					</li>
				</ul>
				<a
					onClick={() => changeLeft(leftStateEnum.timetable)}
					className='brand-logo center'
				>
					Student Calendar
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a onClick={() => changeRight(rightStateEnum.events)}>Events</a>
					</li>
					<li>
						<a onClick={() => changeRight(rightStateEnum.subjects)}>Subjects</a>
					</li>
					<li>
						<a onClick={() => changeRight(rightStateEnum.marks)}>Marks</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
