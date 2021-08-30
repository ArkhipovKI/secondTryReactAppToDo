import React from 'react';
import TasksFilter from './tasks-filter'

const Footer = () => {
	return (
		<footer className='footer'>
			<span className="todo-count">1 items left</span>
			<TasksFilter />
		</footer>
	)
}

export default Footer;