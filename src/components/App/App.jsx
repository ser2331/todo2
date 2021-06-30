import React, {Component} from 'react'
import './App.css'
import TodoList from '../TodoList/TodoList'
import SearchPanel from '../SearchPanel/SearchPanel'
import AppHeader from "../AppHeader/AppHeader";

export default class App extends Component {
	maxId = 100
	state = {
		todoData: [
			this.creatTodoItem('Drink coffee'),
			this.creatTodoItem('Sleep'),
			this.creatTodoItem('Gaming'),
		],
		term: '',
		filter: 'all' //active, all, done
	}

	creatTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	onSearchChange = (e) => {
		this.setState({
			term: e.target.value
		})
	}
	onFilterChange = (filter) => {
		this.setState({filter})
	}
	DeletedItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id)
			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			]
			return {
				todoData: newArray
			}
		})
	}
	AddItem = (text) => {
		const newItem = this.creatTodoItem(text)
		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem,]
			return {
				todoData: newArray
			}
		})
	}

	onToggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id)
		const oldItem = arr[idx]
		const newItem = {...oldItem, [propName]: !oldItem[propName]}
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	}

	onDoneClick = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.onToggleProperty(todoData, id, 'done')
			}
		})
	}
	onImportantClick = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.onToggleProperty(todoData, id, 'important')
			}
		})
	}

	search(items, term) {
		if (term.length === 0)
			return items
		return items.filter((item) => {
			return item.label.toLowerCase()
				.indexOf(term.toLowerCase()) > -1
		})
	}

	filter(items, filter) {
		switch (filter) {
			case 'all':
				return items
			case 'active':
				return items.filter((items)=>!items.done)
			case 'done':
				return items.filter((items)=>items.done)
			default:
				return items
		}
	}

	render() {
		const {todoData, term, filter} = this.state
		const visibleItems = this.filter(this.search(todoData, term), filter)
		const doneCount = todoData.filter((el) => el.done).length
		const todoCount = todoData.length - doneCount
		return (
			<div className='app'>
				<AppHeader toDo={todoCount}
				           doneCount={doneCount}/>
				<SearchPanel
					term={term}
					onSearchChange={this.onSearchChange}
					filter={filter}
					onFilterChange={this.onFilterChange}
				/>
				<TodoList
					todos={visibleItems}
					onDeleted={this.DeletedItem}
					addItem={this.AddItem}
					onLabelClick={this.onDoneClick}
					onImportantClick={this.onImportantClick}
					done={this.creatTodoItem.done}
					important={this.creatTodoItem.important}
				/>
			</div>
		)
	}
}
