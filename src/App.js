import React, { Component } from 'react'
import Header from './components/Header'
import MessageTicker from './components/MessageTicker'
import SlideShow from './components/SlideShow'
import './App.css'
import './components/PureCSSTicker.scss'

class App extends Component {
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
