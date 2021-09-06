import React, { Component } from 'react';
import TasksFilter from './tasks-filter'
import PropTypes from 'prop-types';

export default class Footer extends Component {
	static defaultProps = {
		completedCount: 0,
		deleteCompleted: () => { },
		todos: [],
		handleToggleFilter: () => { },
		currentStatus: 'all'
	}

	static propTypes = {
		deleteCompleted: PropTypes.func,
		todos: PropTypes.arrayOf(PropTypes.object),
		handleToggleFilter: PropTypes.func,
		currentStatus: PropTypes.string
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

