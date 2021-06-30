import React, {Component} from 'react'
import './AppHeader.css'

export default class AppHeader extends Component {
	render() {
		const {doneCount, toDo} = this.props
		return (
			<div className='head'>
				<h1>My todo list</h1>
				<h3> {toDo} more to do, {doneCount} done</h3>
			</div>
		)
	}
}
