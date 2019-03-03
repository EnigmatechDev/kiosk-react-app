import React, { Component } from 'react'
import Currency from './Currency'
import axios from 'axios'
//import appLog from './AppLogger'
import './Crypto.css'

class Crypto extends Component {

  fetchCurrencyData = () => {

		console.log('fetchCurrencyData...');

    axios
			.get('https://api.coinmarketcap.com/v1/ticker/?limit=50&convert=CHF')
      .then(response => {
        const wanted = ['bitcoin', 'ripple', 'ethereum', 'eos', 'tether', 'litecoin', 'tron', 'monero', 'iota', 'neo']
        let result = response.data.filter(currency =>
          wanted.includes(currency.id),
				)
				result = response.data
        this.setState({ data: result })
      })
      .catch(err => console.log(err))
	}
	
  componentDidMount() {
		this.fetchCurrencyData()

		let delay = {
			'ten_secs': 10000,
			'minute': 60000,
			'hour': 3600000,
			'day': 86400000,
			'week': 604800000
		}

		// for deployment this interval should be increased to save on bandwidth.
    this.interval = setInterval(() => this.fetchCurrencyData(), delay.hour)
	}

  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
	}
	
  render() {
    let crypto = this.state.data.map(currency => (
      <Currency data={currency} key={currency.id} />
    ))

    return (
      <div className="crypto-container">
        <ul className="crypto"> {crypto} </ul>
      </div>
    )
  }
}

export default Crypto