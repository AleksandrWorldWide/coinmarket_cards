import React from "react";

export default class ErrorBoundary extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		})
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error">Scheisse</div>
			)
		} else {
			return this.props.children
		}
	}
}