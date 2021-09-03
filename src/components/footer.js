import React, { Component } from 'react';
import TasksFilter from './tasks-filter'

export default class Footer extends Component {
	static defaultProps = {
		completedCount: 0,
		deleteCompleted: () => { },
		todos: [],
		handleToggleFilter: () => { },
		currentStatus: 'all'
	}
	render() {
		const { completedCount, deleteCompleted, todos, handleToggleFilter, currentStatus } = this.props

		return (
			<footer className='footer'>
				<span className="todo-count">{completedCount} items left</span>
				<TasksFilter
					{...todos}
					handleToggleFilter={handleToggleFilter}
					currentStatus={currentStatus}
					deleteCompleted={deleteCompleted}
				/>
			</footer>
		)
	}
}

