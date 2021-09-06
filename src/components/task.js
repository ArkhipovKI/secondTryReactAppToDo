import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';


export default class Task extends Component {
	static defaultProps = {
		label: 'Неизвестная задача',
		completed: false,
		id: Math.random() * 10000,
		created: new Date(),
		currentStatus: 'all',
		isEditing: false,
		onChange: () => { },
		onDeleted: () => { },
		onEdited: () => { },
		toggleStateOfTask: () => { },
	}

	static propTypes = {
		label: PropTypes.string,
		completed: PropTypes.bool,
		id: PropTypes.number,
		created: PropTypes.number,
		isEditing: PropTypes.bool,
		onDeleted: PropTypes.func,
		onEdited: PropTypes.func,
		toggleStateOfTask: PropTypes.func,
		onChange: PropTypes.func,
		currentStatus: PropTypes.string
	}
	state = {
		newText: this.props.label,
		oldValue: this.props.label
	}

	handleInputChange = (event) => {
		const { value } = event.target
		this.setState({
			newText: value
		});
	};

	handleKeyDown = (event) => {
		const { newText, oldValue } = this.state;
		const { successEdit, id, onDeleted } = this.props;
		if (event.key === 'Enter' && event.key.trim()) {
			if (newText === '') {
				onDeleted(id)
			}
			successEdit(newText, id)
			this.setState({
				oldValue: newText
			})
		}
		if (event.key === 'Escape') {
			successEdit(oldValue, id)
			this.setState({
				newText: oldValue
			})
		}
	}

	render() {

		let { newText } = this.state;
		const { label, onDeleted, isEditing, completed, toggleStateOfTask, onEdited, currentStatus, created } = this.props;

		let className = !completed ? '' : 'completed';
		className += `${currentStatus === 'active' && completed ? ' hidden' : ''}`
		className += `${currentStatus === 'completed' && !completed ? ' hidden' : ''}`
		className += `${isEditing ? ' editing' : ''}`

		let view = 'view';

		return (
			<li className={className}>
				<div className={view}>
					<input className="toggle" type="checkbox" onClick={toggleStateOfTask} />
					<label>
						<span className='description'>{label}</span>
						<span className="created">created {formatDistanceToNow(created, { includeSeconds: true })} ago</span>
					</label>
					<button className="icon icon-edit" onClick={onEdited}></button>
					<button className="icon icon-destroy" onClick={onDeleted}></button>
				</div>

				<input
					type="text"
					className="edit"
					value={newText}
					onKeyDown={this.handleKeyDown}
					onChange={this.handleInputChange}
					ref={input => input && input.focus()}
				/>
			</li>
		)
	}
}

