import React, { Component } from 'react'
import DateAndTime from './DateAndTime'
import './Header.css'

class Header extends Component {

	render() {

		return (
				<div className="header">
					<div className="header-website">website: phildoyleart.com</div>
					<div className="header-email">email: info@phildoyleart.com</div>
					<DateAndTime />
			</div>
		)
	}
}

export default Header