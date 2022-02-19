import React from "react"
import PropTypes  from 'prop-types'

export default class Card extends React.Component {

	constructor (props) {
		super (props)
		this.inputRef = React.createRef()
	}
	
	componentDidMount() {
		if (this.props.index === 1) {
			this.inputRef.current.focus()
		}
	}

	render() {
		if (Math.random() > .9) {
			throw new Error('error scheisse')
		}
		return (
			<div className="card">
				<div className="card__star"></div>
				<div className="card__id">{this.props.id}</div>
				<div className="card__img">
					<img src={require(`../../assets/${this.props.icon}.png`)} alt={this.props.icon_alt} className="ibg" />
				</div>
				<div className="card__name">{this.props.name}</div>
				<div className="card__price">{this.props.price}</div>
				<div className="card__cap">{this.props.cap}</div>
				<div className="card__input">
					<input 
						ref={this.inputRef}
						type="text" 
						className="inpt" 
						onChange={this.props.handleName}/>
				</div>
				<div className="card__close" onClick={this.props.handleDelete}></div>
			</div>
		)
	}

	
}

Card.propTypes = {
	name: PropTypes.string
}
