import React, { Component } from 'react'

export default class ItemAddForm extends Component {
	render() {
		const { AddItem } = this.props;
		return (
			<div className='button-add'>
				<button className='btn btn-outline-secondary' onClick={AddItem}>
					Add Item
				</button>
			</div>
		)
	}
}