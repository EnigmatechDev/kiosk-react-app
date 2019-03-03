import React, { Component } from 'react'
// import appLog from './AppLogger'


class DateAndTime extends Component {

	fetchTime = () => {

		console.log('fetchCurrencyData...');

    function nth(d) {
			if (d > 3 && d < 21) return 'th'; 
			switch (d % 10) {
				case 1:  return "st";
				case 2:  return "nd";
				case 3:  return "rd";
				default: return "th";
			}
		}

		const d = new Date();

		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		let day = days[d.getDay()];

		let date = d.getDate() + nth(d.getDate());

		const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		let month = months[d.getMonth()];

		let year = d.getFullYear();

		this.setState({ dateString: day + ", " + date + " " + month + ", " + year })
	}
	
  componentDidMount() {
		this.fetchTime()

		let delay = {
			'ten_secs': 10000,
			'minute': 60000,
			'hour': 3600000,
			'day': 86400000,
			'week': 604800000
		}

		// for deployment this interval should be increased to save on bandwidth.
    this.interval = setInterval(() => this.fetchTime(), delay.minute)
	}

	constructor(props) {
    super(props)
    this.state = {
			dateString: ""
		}
	}

	render() {
		return (
			<div className="header-date-and-time">{ this.state.dateString }</div>
		)
	}
}

export default DateAndTime