import React from 'react';
import Task from './task';

const NewTaskList = ({ todos, onDeleted, toggleStateOfTask }) => {
	const el = todos.map((item) => (
		<li key={item.id}>
			<Task
				{...item}
				onDeleted={() => onDeleted(item.id)}
				toggleStateOfTask={() => toggleStateOfTask (item.id)} />
		</li>
	))
	return (
		<ul className='todo-list'>
			{el}
		</ul>
	)
}

export default NewTaskList;