import React from 'react';
import Task from './task';
import PropTypes from 'prop-types';
import './new-task-list.css'

const NewTaskList = ({ todos, currentStatus, successEdit, onDeleted, toggleStateOfTask, onEdited }) => {
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
	item: {},
	currentStatus: 'all',
	toggleStateOfTask: () => { },
	successEdit: () => { },
	onDeleted: () => { },
	onEdited: () => { }
}

NewTaskList.propTypes = {
	item: PropTypes.shape({
		label: PropTypes.string,
		completed: PropTypes.bool,
		id: PropTypes.number,
		isEditing: PropTypes.bool,
	}),
	todos: PropTypes.arrayOf(PropTypes.object),
	currentStatus: PropTypes.string,
	onDeleted: PropTypes.func,
	onEdited: PropTypes.func,
	toggleStateOfTask: PropTypes.func,
	successEdit: PropTypes.func
}

export default NewTaskList;