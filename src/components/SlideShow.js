import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import axios from 'axios'
import appLog from './AppLogger'
import 'react-animated-slider/build/horizontal.css'
import './slider-animations.css'
import './SlideShow.css'

class SlideShow extends Component {

	// rendered = http:\/\/www.phildoyleart.com\/wp-content\/uploads\/2019\/01\/I41A2738.jpg
	// http://www.phildoyleart.com/wp-content/uploads/2019/01/I41A2738.jpg

	fetchData = () => {
		// retrieve message text from my website
		axios
      .get('http://phildoyleart.com/wp-json/wp/v2/media?media_type=image&search="slide"')
      .then(response => {
				
				appLog( response.data )

				// map results to a slide data array
				let slideData = response.data.map((media) => (
					{
							title: media.title.rendered,
							detail1: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[0],
							detail2: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[1],
							detail3: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[2],
							price: media.alt_text,
							image: media.source_url
					}
				));

				appLog( slideData )

				this.setState({ slides: slideData })
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
		
		console.log('SlideShow.componentDidMount... ');

		this.fetchData()
		this.interval = setInterval(() => this.fetchData(), delay.day )
	}

	constructor(props) {
    super(props)
    this.state = {
			slides: [
				{
					title: 'Paintings, big or small',
					detail1: 'My work comes in many different sizes',
					detail2: 'large or small',
					detail3: 'Let me know your needs',
					price: '',
					image: 'http://localhost:3000/images/slide-the-matriarch.jpg'
				},
				{
					title: 'Every piece is unique',
					detail1: 'I create every one of my artworks',
					detail2: 'from start to finish',
					detail3: 'signed, varnished and ready to hang',
					price: '',
					image: 'http://localhost:3000/images/slide-signed-painting.jpg'
				},
				{
					title: 'Many more works in the pipeline',
					detail1: 'I am always creating new work',
					detail2: 'trying new subjects and styles',
					detail3: 'open to new ideas and commissions',
					price: '',
					image: 'http://localhost:3000/images/slide-shelves.jpg'
				},
				{
					title: 'Local themes and views',
					detail1: 'In my landscapes',
					detail2: 'I attempt to capture the beauty',
					detail3: 'of this wonderful country',
					price: '',
					image: 'http://localhost:3000/images/slide-pilatus-sunset.jpg'
				},
				{
					title: 'Only the best materials',
					detail1: 'The finest food uses the best ingredients',
					detail2: 'and artwork is no different',
					detail3: 'I use only the highest quality art materials',
					price: '',
					image: 'http://localhost:3000/images/slide-paints.jpg'
				},
				{
					title: 'A very local studio',
					detail1: 'I work from a small private studio',
					detail2: 'less than a five minute walk from here',
					detail3: '',
					price: '',
					image: 'http://localhost:3000/images/slide-painting-space.jpg'
				},
				{
					title: 'The beauty of canvas',
					detail1: 'Canvas is perfect for paintings',
					detail2: 'It is light weight for hanging',
					detail3: 'lasts for many years and looks beautiful',
					price: '',
					image: 'http://localhost:3000/images/slide-mountain-wilderness-bg.jpg'
				},
				{
					title: 'A very local artist',
					detail1: 'As a resident of Zug',
					detail2: 'much of my work features local wildlife',
					detail3: 'as well as familiar views and themes',
					price: '',
					image: 'http://localhost:3000/images/slide-heron-at-the-harbor.jpg'
				},
				{
					title: 'Art for every season',
					detail1: 'Keep your space fresh and interesting',
					detail2: 'rotate your paintings by the season',
					detail3: 'I have work for every time of year',
					price: '',
					image: 'http://localhost:3000/images/slide-autumn-trees.jpg'
				},
				{
					title: 'Support a local artist',
					detail1: 'Buying my artwork enables',
					detail2: 'me to continue to create it',
					detail3: 'Thank you for your support!',
					price: '',
					image: 'http://localhost:3000/images/slide-morning-encounter-bg.jpg'
				}
			]
    }
	}
	
  render() {
    return (
      <div className='slide-show-container'>
     	<Slider autoplay="10000" duration="10" touchDisabled="true" buttonDisabled="true" previousButton="" nextButton="" className="slider-wrapper">
				{this.state.slides.map((item, index) => (
					<div
						key={index}
						className="slider-content"
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="inner">
							<h1>{item.title}</h1>
							<div className="price">{item.price}</div>
							<div className="details">{item.detail1}</div>
							<div className="details">{item.detail2}</div>
							<div className="details">{item.detail3}</div>
						</div>
					</div>
				))}
			</Slider>
      </div>
    )
  }
}

export default SlideShow