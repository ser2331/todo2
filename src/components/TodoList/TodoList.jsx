import React from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'
import ItemAddForm from "../ItemAddForm/ItemAddForm";
const TodoList = ({
	                  todos, onDeleted,
	                  addItem,
	                  onLabelClick, onImportantClick,
                  }) => {
	const element = todos.map((item) => {
		const {id, ...itemProps} = item
		return (
			<li key={id}>
				<TodoListItem
					{...itemProps}
					todos={todos}
					onDeleted={() => onDeleted(id)}
					onLabelClick={() => onLabelClick(id)}
					onImportantClick={() => onImportantClick(id)}
					important={item.important}
					done={item.done}
				/>
			</li>
		)
	})
	return (<div className='list'>
			<ul>
				{element}
			</ul>
			<ItemAddForm
				addItem={addItem}
				todos={todos}
			/>
		</div>
	)
}
export default TodoList