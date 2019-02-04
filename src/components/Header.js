import React, { Component } from 'react'
import DateAndTime from './DateAndTime'
import './Header.css'

class Header extends Component {

	render() {

		return (
			<div className="header">
				<div className="title">
					<div className="title-website">website: phildoyleart.com</div>
					<div className="title-email">email: info@phildoyleart.com</div>
					<DateAndTime />
				</div>
			</div>
		)
	}
}

export default Header