import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navabr/Navbar';
import './Main.css';
import Slider from 'infinite-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse, faPlay } from '@fortawesome/free-solid-svg-icons';
import Page2 from '../page2/Page2';
import Page3 from '../Page3/Page3';
import Page4Video from '../Page4Video/Page4Video';
import Page5 from '../Page5/Page5';
import Page6 from '../Page6/Page6';
import Page7 from '../Page7/Page7';
import Page8 from '../Page8/Page8';
import Page9 from '../Page9/Page9';
import Page10 from '../Page10/Page10';
import Page11 from '../Page11/Page11';
import Footer from '../Footer/Footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import useSmoothScrollTo from '../../../src/useSmoothScrollTo/useSmoothScrollTo';

function Main() {
	const middleSliderOptions = {
		type: 'fade',
		arrows: false,
		lazyLoad: true,
		speed: 1000,
		autoplay: true,
		interval: 4000,
		rewind: true
	};
	const [ show, setShow ] = useState(false);

	return (
		<div className="container-flueid Main p-0 m-0">
			<Navbar />
			<div className="container-flueid p-0 m-0">
				<div className="imageMain"/>
				
				<div className="home-desc-center">
					<section id="Home" className="section1">
						<div className="container MainContainer">
							<div className="row rowParent ">
								<div className="col-lg-12 colLg text-center">
									<div className="main-slider home-content text-center">
										<Splide options={middleSliderOptions}>
											<SplideSlide>
												<div className="div-slider">
													<h3 className="home-title ">
														Analyze you Technique and Performance beside elites’
													</h3>
													<p className="home-desc-2 text-white">
														NSAtech is the platform that is completely based on AI and
														useful for analyzing athlete performance and keep the fan after
														end of match for broadcasters.
													</p>
													<div className="btndivre">
														<a className="btn btn-custom btn-rounded">Request Demo </a>
														<span className="text-uppercase p-3">Or</span>
														<a className="text-customIcon">
															<FontAwesomeIcon icon={faPlay} className="text-custom " />
														</a>
													</div>
												</div>
											</SplideSlide>
											<SplideSlide>
												<div>
													<h3 className="home-title ">
														Track your progress during usage time periods.
													</h3>
													<p className="home-desc-2-custum2 text-white">
														NSAtech is the platform that is completely based on AI and Deep
														Learning approaches, and useful for analyzing athlete
														performance and keep the fan after end of match for
														broadcasters. We focus on athletic performance and healthcare
														hubs.
													</p>
													<div className="  btndivre">
														<a className="btn btn-customText">
															upload video of your game.(technique){' '}
														</a>
														<span className="text-uppercase p-3">Or</span>
														<a className="text-customIcon">
															<FontAwesomeIcon icon={faPlay} className="text-custom " />
														</a>
													</div>
												</div>
											</SplideSlide>
											<SplideSlide>
												<div>
													<h3 className="home-title">
														you can use our technologies as broadcaster to engage and more
														attract your viewers
													</h3>
													<p className="home-desc-2-custum1 text-white">
														NSAtech is the platform that is completely based on AI and Deep
														Learning approaches, and useful for analyzing athlete
														performance and keep the fan after end of match for
														broadcasters. We focus on athletic performance and healthcare
														hubs.
													</p>
													<div className=" btndivre">
														<a className="btn btn-custom btn-rounded">Request Demo</a>
														<span className="text-uppercase p-3">Or</span>
														<a className="text-customIcon">
															<FontAwesomeIcon icon={faPlay} className="text-custom " />
														</a>
													</div>
												</div>
											</SplideSlide>
										</Splide>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="mouse_down text-center">
										<img
											src="https://themesdesign.in/readxon/layouts/images/mouse-down.png"
											className="imagemouse"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<section id="section2" className="section2 ">
					<Page2 />
				</section>
				<section id="section3" className="section3">
					<Page3 />
				</section>
				<section className="Page4">
					<div className="imagelayout" />
					<Page4Video />
				</section>
				<section id="section5" className="section5">
					<Page5 />
				</section>
				<section id="section6" className="section6">
					<Page6 />
				</section>
				<section className="Page7">
					<div className="imagelayout7"/>
					<Page7 />
				</section>
				<section id="section8" className="section8">
					<Page8 />
				</section>
				<section id="section9" className="section9">
					<Page9 />
				</section>
				<section className="section10">
					
					<Page10 />
				</section>
				<section id="section11" className="section11">
					<Page11 />
				</section>
				<section className="Footer">
					<Footer />
				</section>
			</div>
		</div>
	);
}

export default Main;
