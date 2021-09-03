import React, { Component } from 'react';

export default class Task extends Component {


	state = {
		newText: this.props.label,
	}

	handleInputChange = (event) => {
		const { value } = event.target
		this.setState({
			newText: value,
		});
	};

	handleKeyDown = (event) => {
		const { newText } = this.state;
		const { successEdit, id } = this.props;
		if (event.key === 'Enter') {
			successEdit(newText, id)
		}
	}

	render() {

		let { newText } = this.state;
		const { label, onDeleted, isEditing, completed, toggleStateOfTask, onEdited, currentStatus } = this.props;

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
						<span className="created">created 5 minutes ago</span>
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

