import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import './task.css'
import cn from 'classnames'

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
		successEdit: () => { },
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

	handleOnBlur = (event) => {
		console.log(event)
		const { successEdit, id } = this.props
		successEdit(this.state.newText !== '' ? this.state.newText : 'Введите задачу', id)
	}

	handleKeyDown = (event) => {
		const { newText, oldValue } = this.state;
		const { successEdit, id, onDeleted } = this.props;
		if (event.key === 'Enter' && event.key.trim()) {
			if (newText === '') {
				onDeleted(id)
			}
			event.preventDefault()
			successEdit(newText, id)
			this.setState({
				oldValue: newText
			})
			event.target.focus()
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

		//let className = !completed ? '' : 'completed';
		let className = cn({
			'editing': isEditing,
			'completed': completed,
			'hidden': (completed && currentStatus === 'active') ||
				(currentStatus === 'completed' && !completed)
		})
		//className += `${currentStatus === 'active' && completed ? ' hidden' : ''}`
		//className += `${currentStatus === 'completed' && !completed ? ' hidden' : ''}`
		//className += `${isEditing ? ' editing' : ''}`

		let view = 'view';

		return (
			<li className={className}>
				<div className={view}>
					<input className="toggle" type="checkbox" readOnly checked={completed} onClick={toggleStateOfTask} />
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
					onKeyUp={this.handleKeyDown}
					onChange={this.handleInputChange}
					ref={input => input && input.focus()}
					onBlur={this.handleOnBlur}
				/>
			</li >
		)
	}
}

