import React from 'react'
import { ChangeContext } from '../App/App'

export default class Test extends React.Component {

	

	render() {
		return (
			<div>
				<ChangeContext.Consumer>
					{test => <div className="test">{test}</div>}
				</ChangeContext.Consumer>
			</div>
			
		)
	}
}