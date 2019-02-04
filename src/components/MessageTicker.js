import React, { Component } from 'react'
import Crypto from './Crypto'
import axios from 'axios'
import appLog from './AppLogger'
import './PureCSSTicker.scss'

function unicodeToChar(text) {
	return text.replace(/\\u[\dA-F]{4}/gi, 
				 function (match) {
							return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
				 });
}

class MessageTicker extends Component {

	fetchMessageData = () => {
		// retrieve message text from my website
		axios
      .get('http://phildoyleart.com/wp-json/wp/v2/posts/1532')
      .then(response => {

				const result = response.data.content.rendered.split("--KIOSK--")[1]
				appLog( result )

				const textArray = unicodeToChar(result).split("\n")
				appLog( textArray )

				this.setState({ messages: textArray })
      })
			.catch(err => console.log(err))
	}
	
  componentDidMount() {
		
		let delay = {
			'ten_secs': 10000,
			'minute': 60000,
			'hour': 3600000,
			'day': 86400000,
			'week': 604800000
		}

		// for deployment this interval should be optimized to save on bandwidth.
		// the text message ticker needs only update once a day or less
		// the crypto component takes care of it's own updates
		
		console.log('MessageTicker.componentDidMount... ' + this.props.type);

		if (this.props.type === "text") {
			this.fetchMessageData()
			this.interval = setInterval(() => this.fetchMessageData(), delay.day )
		}
	}

	constructor(props) {
    super(props)
    this.state = {
			messages: [
				"Yow! Invest your bonus in something to brighten up the walls of our apartment.",
				"If you see anything that interests you then please email me at the address above.",
				"I also do commissions. So, if you would like something specific, then please let me know.",
				"I can work in a range of subjects, media, styles, sizes and price range. Email me at the address above.",
				"In addition to my artwork I'm a techie and responsible for this kiosk screen with live feeds and remote management.",
				"Contact me if you would like a similar kiosk screen developed",
				"Regarding software development, full stack web development, blockchain and crypto currency related work, I am also available.",
				"In the year that should see the normalization of blockchain technology this is possibly the first public crypto currency live ticker in Switzerland. Yay!",
				"Whatever you are doing, have a great day!"
			],
    }
  }

  render(){

		if( this.props.type === "text" ) {
			let content = this.state.messages.map(message => (
				<div className="ticker__item" key={ message }>{ message }</div>
			))
	
			return(
				<div className="ticker-wrap-text">
					<div className="ticker">{ content }</div>
				</div>
			)
		} else 
		
		if( this.props.type === "crypto" ) {
			return(
				<div className="ticker-wrap-crypto">
					<div className="ticker">
					<Crypto />
					</div>
				</div>
			)
		}
  }
}

export default MessageTicker