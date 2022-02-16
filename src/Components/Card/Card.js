
const Card = (props) => (

	<div className="card">
		<div className="card__star"></div>
		<div className="card__id">{props.id}</div>
		<div className="card__img">
			<img src={require(`../../assets/${props.icon}.png`)} alt={props.icon_alt} className="ibg" />
		</div>
		<div className="card__name">{props.name}</div>
		<div className="card__price">{props.price}</div>
		<div className="card__cap">{props.cap}</div>
		<div className="card__input">
			<input type="text" className="inpt" onChange={props.handleName}/>
		</div>
		<div className="card__close" onClick={props.handleDelete}></div>
	</div>
)

export default Card