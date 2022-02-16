import React, {Component} from 'react';
import './App.scss';
import Card from '../Card/Card'
import Side from '../Rside/Rside';
import Header from '../Header/Header';

class App extends Component{

	state = {
		coins : [
			{
				id: '1',
				icon: 'btc',
				icon_alt: 'btc',
				name: 'Bitcoin BTC',
				price: '$43,831.42',
				cap: '$828,764,419,993'
			},
			{
				id: '2',
				icon: 'eth',
				icon_alt: 'eth',
				name: 'Ethereum ETH',
				price: '$3,062.64',
				cap: '$364,606,579,258'
			},
			{
				id: '3',
				icon: 'xrp',
				icon_alt: 'xrp',
				name: 'XRP XRP',
				price: '$0.8297',
				cap: '$39,521,641,238'
			},
			{
				id: '4',
				icon: 'ada',
				icon_alt: 'ada',
				name: 'Cardano ADA',
				price: '$1.08',
				cap: '$36,030,214,715'
			},
			{
				id: '5',
				icon: 'luna',
				icon_alt: 'luna',
				name: 'Terra LUNA',
				price: '$55.17',
				cap: '$21,966,508,732'
			}
		],
		showCards: true,
		pageTitle: 'CoinMarketCap'
	}

	handleShow = () => {
		this.setState({
			showCards: !this.state.showCards
		})
	}

	handleTitle = (name) => {
		this.setState({
			pageTitle: name
		})
	}

	handleInput = (event) => {
		this.setState({
			pageTitle: event.target.value
		})
	}

	handleName = (name, i) => {
		const coin = this.state.coins[i]
		coin.name = name
		const coins = [...this.state.coins]
		coins[i] = coin
		this.setState({coins})
	}

	handleDelete = (i) => {
		const coins = [...this.state.coins]
		coins.splice(i,1)
		this.setState({coins})
	}


	render () {
		return (
			<div className="App">
				<div className="wrapper">
					<div className="content">
					<Header/>
					{this.state.showCards ?
					this.state.coins.map((card,i) => {
						return (
							<Card
								id={card.id}
								icon={card.icon}
								icon_alt={card.icon_alt}
								name={card.name}
								price={card.price}
								cap={card.cap}
								handleName={event => this.handleName(event.target.value, i)}
								handleDelete={this.handleDelete.bind(this, i)}
							/>
						)})
						: null
					}
					</div>
					<Side
						handleShow={this.handleShow}
						title={this.state.pageTitle}
						click={this.handleTitle.bind(this, 'CoinMarketCap changed!')}
						handleInput={this.handleInput}
					/>
				</div>
			</div>
		 );
	}
  
}

export default App;
