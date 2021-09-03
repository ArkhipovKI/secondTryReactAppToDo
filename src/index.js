import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewTaskForm from './components/new-task-form';
import NewTaskList from './components/new-task-list';
import Footer from './components/footer';

export default class ToDoApp extends Component {

	maxId = 1;

	state = {
		toDoData: [
			this.createItem('Completed task'),
			this.createItem('Editing task'),
			this.createItem('Active task')
		],
		currentStatus: 'all'
	};

	toggleProperty(arr, id, propName) {
		const index = arr.findIndex((el) => el.id === id);

		const oldEl = arr[index];
		const newEl = { ...oldEl, [propName]: !oldEl[propName] }

		return [
			...arr.slice(0, index),
			newEl,
			...arr.slice(index + 1)
		]
	}

	createItem(label) {
		return ({
			label,
			completed: false,
			id: this.maxId++,
			isEditing: false
		})
	}

	onEdited = (id) => {
		this.setState(({ toDoData }) => {
			return { toDoData: this.toggleProperty(toDoData, id, 'isEditing') }
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
			return {
				toDoData: this.toggleProperty(toDoData, id, 'completed')
			};
		})
	}

	deleteItem = (id) => {
		this.setState(({ toDoData }) => {
			const newArr = toDoData.filter((el) => el.id !== id)

			return {
				toDoData: newArr
			}
		})
	}

	deleteCompleted = () => {
		this.setState(({ toDoData }) => {
			const newArr = toDoData.filter((el) => el.completed !== true)
			console.log(newArr)
			return {
				toDoData: newArr
			}
		})
	}

	handleToggleFilter = (name) => {
		this.setState({
			currentStatus: name,
		})
	}
	successEdit = (text, id) => {
		this.setState(({ toDoData }) => {
			const newState = toDoData.map((el) => {
				if (id === el.id) {
					el.label = text;
					el.isEditing = !el.isEditing;
				}
				return el;
			})

			return {
				toDoData: newState
			}
		})
	}
	render() {
		console.log(this.state)
		const { currentStatus, toDoData } = this.state

		const completedCount = toDoData.filter((el) => el.completed === false).length

		return (
			<section className='todoapp' >
				<header>
					<h1>todos</h1>
					<NewTaskForm AddItem={this.addNewItem} />
				</header>
				<section className='main'>
					<NewTaskList
						todos={toDoData}
						currentStatus={currentStatus}
						onEdited={this.onEdited}
						onDeleted={this.deleteItem}
						toggleStateOfTask={this.toggleStateOfTask}
						successEdit={this.successEdit} />
					<Footer
						completedCount={completedCount}
						currentStatus={currentStatus}
						todos={toDoData}
						deleteCompleted={this.deleteCompleted}
						handleToggleFilter={this.handleToggleFilter}
					/>
				</section>
			</section>
		);
	}
}
ReactDOM.render(<ToDoApp />, document.getElementById('root'))
