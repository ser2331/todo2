import React, {Component} from 'react'
import './ItemAddForm.css'

export default class SearchPanel extends Component {
	state ={
		label: ''
	}
onLabelChange=(e)=>{
	this.setState({
		label:e.target.value
	})
}
	onSubmit=(e)=>{
	e.preventDefault()
		this.props.addItem(this.state.label)
		this.setState({
			label:''
		})
	}
	render() {
		return (<form className='add-panel'
		              onSubmit={this.onSubmit}
			>
				<input
					className='add-item'
					type='text'
					placeholder='take your todo item'
					onChange={this.onLabelChange}
					value={this.state.label}
				/>
				<button
					className='btn'
					type='button'
					onClick={this.onSubmit}
				>Add Item
				</button>

			</form>
		)
	}
}
