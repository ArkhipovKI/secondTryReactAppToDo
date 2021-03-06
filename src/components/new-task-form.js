import React, { Component } from 'react';
import './new-task-form.css'

export default class NewTaskForm extends Component {
	state = {
		label: ''
	}

	onLabelChange = (event) => {
		const value = event.target.value

		if (value !== ' ') {
			this.setState({ label: value })

		}
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.AddItem(this.state.label)
		this.setState({
			label: ''
		})
	}

	render() {

		return (
			<form className='form-input'
				onSubmit={this.onSubmit}>
				<input
					className='new-todo'
					onChange={this.onLabelChange}
					placeholder='What needs to be done?'
					autoFocus
					value={this.state.label}
					required
				/>
				<button className='btn btn-outline-secondary'>
					Add Item
				</button>
			</form>
		)
	}
}
