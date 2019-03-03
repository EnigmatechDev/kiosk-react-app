import React from 'react'
// import appLog from './AppLogger'
import './Currency.css'

// Note: Lets write any stateless functional components using the ES6 format
//
// i.e.
//	const MyComponent = props => {
//		return (
//			<Component>
//				{prop.myProperty}
//			</Component>
//		)
//	}

const Currency = props => {
  const {
    name,
    symbol,
    price_chf,
    //percent_change_1h,
    //percent_change_24h,
    percent_change_7d,
	} = props.data

	/*
 return (
    <li className="currency">
      <div >
				<div className="currency-name">{name} ({symbol})</div>
				<div className="currency-price">CHF { ( + price_chf).toFixed(2) }</div>
				<div className="currency-change">{ percent_change_1h }% 1hr</div>
				<div className="currency-change">{ percent_change_24h }% 24hrs</div>
				<div className="currency-change">{ percent_change_7d }% 7days</div>
      </div>
    </li>
  )
	*/

	return (
    <li className="currency">
      <div >
				<div className="currency-name">{name} ({symbol})</div>
				<div className="currency-price">CHF { ( + price_chf).toFixed(2) }</div>
				<div className="currency-change">{ percent_change_7d }% (7 days)</div>
      </div>
    </li>
  )
}

export default Currency