import React, { Component } from 'react';

export default class TasksFilter extends Component {

	static defaultProps = {
		currentStatus: 'all',
		deleteCompleted: () => { },
		handleToggleFilter: () => { }
	}

	render() {
		const { deleteCompleted, currentStatus, handleToggleFilter } = this.props

		return (
			<ul className="filters">
				<li>
					<button
						name='all'
						className={currentStatus === 'all' ? 'selected' : ''}
						onClick={(event) => handleToggleFilter(event.target.name)} >
						All
					</button>
				</li>
				<li>
					<button
						name='active'
						className={currentStatus === 'active' ? 'selected' : ''}
						onClick={(event) => handleToggleFilter(event.target.name)} >
						Active
					</button>
				</li>
				<li>
					<button
						name='completed'
						className={currentStatus === 'completed' ? 'selected' : ''}
						onClick={(event) => handleToggleFilter(event.target.name)} >
						Completed
					</button>
				</li>
				<li>
					<button
						onClick={deleteCompleted} >
						Clear completed
					</button>
				</li>
			</ul>
		)
	}
}

