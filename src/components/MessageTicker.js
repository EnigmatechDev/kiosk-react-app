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
		let url = 'http://phildoyleart.com/wp-json/wp/v2/posts/1532';
		
		axios
      .get(url)
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
				"Invest in something to brighten up the walls of our apartment and workspace.",
				"If you see anything here that interests you then please email me at the address at the top of this screen.",
				"Always new artwork being created, I am also happy to take on commissions. So, if you would like something specific, then please contact me.",
				"My artwork covers a broad range of subjects, media, styles, sizes and prices. Email me at the address above.",
				"In addition to my artwork, I'm a professional software developer, and techie, and responsible for this kiosk screen with live feeds and remote management.",
				"Regarding software development, full stack web development, blockchain and crypto currency related work, I am also available.",
				"By way of art reflecting the times, I also bring you the cryptocurrency ticker below.",
				"In the year that should see the normalisation of decentralised ledger technology, such as blockchain, this is possibly the first public crypto currency live ticker in Switzerland. Yay!",
				"I've more tech-art in the pipeline so watch this space. :)",
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