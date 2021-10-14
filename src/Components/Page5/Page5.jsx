import React from 'react';
import './Page5.css';
import Slider from 'infinite-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faMouse, faPlay } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nikan1 from '../../assets/img/nikan1.png';
import Nikan2 from '../../assets/img/nikan2.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

function Page5() {
	const middleSliderOptions = {
		type: 'slide',
		arrows: false,
		lazyLoad: true,
		speed: 1000,
		autoplay: true,
		interval: 4000,
		rewind: true
	};

	return (
		<div className="container Page5">
			<div children="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">NSAtech coach</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								Get feedback from Top world coach in Tennis and Soccer according to analysis of your
								technique and performance.
							</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center mtSlider ">
					<div className="col-lg-8 ">
						<Splide options={middleSliderOptions}>
							<SplideSlide>
								<div className="client-img ">
									<img src={Nikan1} className="img-person" />
								</div>
								<h2 className=" texth2 font-poppins">Francesco Mendo </h2>
								<p className="Ptext mt-4 font-rubik">
									Coach great players and bring them to the top of the world rankings Coaching
									Experience: Rafa Nadal Tennis Academy Luca Nardi
								</p>
								<div className="footerSlider pt-4">
									<div className="client-position">
										<h6 className="h6text font-rubik">Python Developer</h6>
										<p className="pFooter font-rubik">Scott Merced</p>
									</div>
								</div>
							</SplideSlide>

							<SplideSlide>
								<div className="client-img">
									<img src={Nikan2} className="img-person" />
								</div>
								<h2 className="texth2 font-poppins">NSAtech coachl</h2>
								<p className="Ptext mt-4 font-rubik">
									Diego Dinomo Coach great players and bring them to the top of the world rankings
									Coaching Experience: Fernando Verdasco top ATPtour player, Barbora Strycova and
									Coached Guillermo Garcia-Lopez ATP/WTA Rank.
								</p>
								<div className="footerSlider ">
									<div className="client-position">
										<h6 className="h6text font-rubik">ATP/WTA coach</h6>
										<p className="pFooter font-rubik">Scott Merced</p>
									</div>
								</div>
							</SplideSlide>
						</Splide>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page5;
