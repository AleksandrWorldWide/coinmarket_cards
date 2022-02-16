
const Side = (props) => (
	<div className="side">
		<div className="side__title">{props.title}</div>
		<div className="side__btn">
			<button className="btn" onClick={props.click}>Click</button>
		</div>
		<div className="side__input">
			<input type="text" className="inpt" onChange={props.handleInput}/>
		</div>
		<div className="side__show">
			<button className="btn" onClick={props.handleShow}>Show</button>
		</div>
	</div>
)

export default Side