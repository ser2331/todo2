import React, {Component} from 'react'
import './SearchPanel.css'

export default class SearchPanel extends Component {
	buttons = [
		{name: 'all', label: 'All',},
		{name: 'active', label: 'Active',},
		{name: 'done', label: 'Done',}
	]

	render() {
		const {term, onSearchChange, filter, onFilterChange} = this.props
		const buttons = this.buttons.map(({name, label}) => {
			const isActive = filter === name
			const clazz = isActive ? ` act` : `search`
			return (
				<button
					type='button'
					className={`search ${clazz} `}
					key={name}
					onClick={() => onFilterChange(name)}
				> {label} </button>
			)
		})
		const searchPanelText = 'type here to search'
		return (<form className='search-panel'
			>
				<input
					placeholder={searchPanelText}
					className='search-style'
					onChange={onSearchChange}
					value={term}
				/>
				{buttons}
			</form>
		)
	}
}
