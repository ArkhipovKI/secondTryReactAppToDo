import React, { Component } from 'react';

export default class Task extends Component {

	render() {
		const { label, onDeleted, complited, toggleStateOfTask } = this.props;

		let classNames = 'description';

		if (complited) {
			classNames += ' crossover-element'
		}

		return (
			<div className='view'>
				<input className="toggle" type="checkbox" onClick={toggleStateOfTask} />
				<label>
					<span className={classNames}>{label}</span>
					<span className="created">created 5 minutes ago</span>
				</label>
				<button className="icon icon-edit"></button>
				<button className="icon icon-destroy" onClick={onDeleted}></button>
			</div>
		)
	}
}

