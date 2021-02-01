import React from 'react';

function Events(): JSX.Element {
	return (
		<ul className='collection'>
			<li className='collection-item avatar'>
				<img src='images/yuna.jpg' alt='' className='circle' />
				<span className='title'>Title</span>
				<p>
					First Line <br />
					Second Line
				</p>
				<a href='#!' className='secondary-content'>
					<i className='material-icons'>grade</i>
				</a>
			</li>
		</ul>
	);
}

export default Events;
