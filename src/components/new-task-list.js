import React from 'react';
import Task from './task';

const NewTaskList = ({ todos, currentStatus, successEdit, onDeleted, toggleStateOfTask, onEdited, isEditing }) => {
	const el = todos.map((item) => (
		<Task
			key={item.id}
			{...item}
			onEdited={() => onEdited(item.id)}
			onDeleted={() => onDeleted(item.id)}
			currentStatus={currentStatus}
			successEdit={successEdit}
			toggleStateOfTask={() => toggleStateOfTask(item.id)} />
	))
	return (
		<ul className='todo-list'>
			{el}
		</ul>
	)
}

NewTaskList.defaultProps = {
	todos: [],
	currentStatus: 'all',
	onDeleted: () => { },
	toggleStateOfTask: () => { }
}

export default NewTaskList;