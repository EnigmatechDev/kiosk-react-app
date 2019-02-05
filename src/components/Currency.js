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
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
	} = props.data

	/*
  return (
    <li className="currency">
      <p className="currency-name">
        {name} ({symbol})
      </p>
      <h1 className="currency-price">CHF { ( + price_usd).toFixed(2) }</h1>
      <p className="currency-change">{ percent_change_1h }% 1hr</p>
      <p className="currency-change">{ percent_change_24h }% 24hrs</p>
      <p className="currency-change">{ percent_change_7d }% 7days</p>
    </li>
	)
	*/

	return (
    <li className="currency">
      <div >
				<div className="currency-name">{name} ({symbol})</div>
				<div className="currency-price">CHF { ( + price_usd).toFixed(2) }</div>
				<div className="currency-change">{ percent_change_1h }% 1hr</div>
				<div className="currency-change">{ percent_change_24h }% 24hrs</div>
				<div className="currency-change">{ percent_change_7d }% 7days</div>
      </div>
    </li>
  )
}

export default Currency