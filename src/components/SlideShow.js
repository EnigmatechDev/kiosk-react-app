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
							medium: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[0],
							size: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[1],
							frame: media.caption.rendered.replace('<p>','').replace('</p>','').split(",")[2],
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
		this.interval = setInterval(() => this.fetchData(), delay.minute )
	}

	constructor(props) {
    super(props)
    this.state = {
			slides: [
				{
					title: 'Smell my cheese',
					description: 'Acrylic and Oil on Canvas, 50 x 70cm',
					price: 'CHF 200.-',
					image: 'https://i.imgur.com/ZXBtVw7.jpg'
				},
				{
					title: 'Tortor Dapibus Commodo Aenean Quam',
					description: 'Acrylic and Oil on Canvas, 50 x 70cm',
					price: 'CHF 200.-',
					image: 'https://i.imgur.com/DCdBXcq.jpg'
				},
				{
					title: 'Phasellus volutpat metus',
					description: 'Acrylic and Oil on Canvas, 50 x 70cm',
					price: 'CHF 200.-',
					image: 'https://i.imgur.com/DvmN8Hx.jpg'
				},
				{
					title: 'Vulputate Mollis Ultricies Fermentum Parturient',
					description: 'Acrylic and Oil on Canvas, 50 x 70cm',
					price: 'CHF 200.-',
					image: 'https://i.imgur.com/ZXBtVw7.jpg'
				},
				{
					title: 'Tortor Dapibus Commodo Aenean Quam',
					description: 'Acrylic and Oil on Canvas, 50 x 70cm',
					price: 'CHF 200.-',
					image: 'https://i.imgur.com/DCdBXcq.jpg'
				},
				{
					title: 'Full Stack development',
					description: 'Open to new projects. Contact me.',
					image: 'https://i.imgur.com/DvmN8Hx.jpg'
				}
			]
    }
	}
	
  render() {
    return (
      <div className='slide-show-container'>
     	<Slider autoplay="5000" touchDisabled="true" buttonDisabled="true" previousButton="" nextButton="" className="slider-wrapper">
				{this.state.slides.map((item, index) => (
					<div
						key={index}
						className="slider-content"
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="inner">
							<h1>{item.title}</h1>
							<div className="price">{item.price}</div>
							<div className="details">{item.medium}</div>
							<div className="details">{item.size}</div>
							<div className="details">{item.frame}</div>
						</div>
					</div>
				))}
			</Slider>
      </div>
    )
  }
}

export default SlideShow