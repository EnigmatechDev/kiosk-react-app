import React, { Component } from 'react'
import Header from './components/Header'
import MessageTicker from './components/MessageTicker'
import SlideShow from './components/SlideShow'
import './App.css'
import './components/PureCSSTicker.scss'

class App extends Component {

	componentDidMount() {		
	
		/*
		const googleTrends = require('google-trends-api');

		googleTrends.interestOverTime({
			keyword: 'Valentines Day',
			startTime: new Date(Date.now() - (4 * 60 * 60 * 1000)),
			granularTimeResolution: true,
		}, function(err, results) {
			if (err) console.log('oh no error!', err);
			else console.log(results);
		});
		*/

		const { ExploreTrendRequest } = require('g-trends')
		
		const explorer = new ExploreTrendRequest()

		explorer.addKeyword('Dream about snakes')
			.compare('Dream about falling')
			.download().then( csv => {
					console.log('[✔] Done, take a look at your beautiful CSV formatted data!')
					console.log(csv)
			}).catch( error => {
					console.log('[!] Failed fetching csv data due to an error', error)
			})
	}

  render() {
	
		return (
      <div className="App">
				<Header />
				<SlideShow />
				<MessageTicker type="text" />
				<MessageTicker type="crypto" />
			</div>
    );
  }
}

export default App
