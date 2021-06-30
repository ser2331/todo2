import React, {Component} from 'react'
import './TodoListItem.css'

export default class TodoListItem extends Component {
	render() {
		const {
			label, onDeleted,
			onLabelClick, onImportantClick,
			done, important
		} = this.props
		let classNames = 'on-item'
		if (done) {
			classNames += ' done'
		}
		if (important) {
			classNames += ' important'
		}
		return (<div className='item'>
            <span
	            className={classNames}
	            onClick={onLabelClick}
            >
                {label}</span>
				<button
					type='button'
					className='del'
					onClick={onDeleted}
				> del
				</button>
				<button
					type='button'
					className='imp'
					onClick={onImportantClick}
				>
					imp
				</button>
			</div>
		)
	}
}
