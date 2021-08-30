import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from './components/new-task-form';
import NewTaskList from './components/new-task-list';
import Footer from './components/footer';
import ItemAddForm from './components/item-add-form';

export default class ToDoApp extends Component {

	maxId = 1;

	state = {
		toDoData: [
			this.createItem('Completed task'),
			this.createItem('Editing task'),
			this.createItem('Active task')
		]
	};

	createItem(label) {
		return ({
			label,
			complited: false,
			id: this.maxId++
		})
	}

	addNewItem = (text) => {
		this.setState(({ toDoData }) => {

			const newItem = this.createItem(text)
			const newArr = [...toDoData, newItem]

			return {
				toDoData: newArr
			}

		})
	}

	toggleStateOfTask = (id) => {
		this.setState(({ toDoData }) => {

			const index = toDoData.findIndex((el) => el.id === id);

			const oldEl = toDoData[index];
			const newEl = { ...oldEl, complited: !oldEl.complited }

			const newArr = [
				...toDoData.slice(0, index),
				newEl,
				...toDoData.slice(index + 1)
			]

			return { toDoData: newArr };
		})
	}

	deleteItem = (id) => {
		this.setState(({ toDoData }) => {
			console.log(toDoData)
			const newArr = toDoData.filter((el) => el.id !== id)

			return {
				toDoData: newArr
			}
		})
	}

	render() {
		return (
			<section className='todoapp' >
				<header>
					<h1>todos</h1>
					<NewTaskForm />
				</header>
				<section className='main'>
					<NewTaskList todos={this.state.toDoData}
						onDeleted={this.deleteItem}
						toggleStateOfTask={this.toggleStateOfTask} />
					<ItemAddForm AddItem={() => this.addNewItem('Hello world')} />
					<Footer />
				</section>
			</section>
		);
	}
}
ReactDOM.render(<ToDoApp />, document.getElementById('root'))
