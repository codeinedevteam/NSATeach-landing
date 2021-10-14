import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Page9.css';
import nikan1Page9 from '../../assets/img/nikan1Page7.jpg';
import nikan2Page9 from '../../assets/img/nikan2Page9.jpg';
import nikan3Page9 from '../../assets/img/nikan3Page9.jpg';

function Page9() {
	return (
		<div className=" Page9">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">Breaking News</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								Know more about our progress, news and world of sport technologies , analyzing and etc.
							</p>
						</div>
					</div>
				</div>
				<div className="row  pt-3 rowPage9">
					<div className="col-lg-4 ">
						<div className="blog-content mt-4">
							<div className="blog-image">
								<img src={nikan1Page9} className="imgblog" />
							</div>
							<div className="blog-lable font-rubik">
								<p className="date">14</p>
								<p className="month">April</p>
							</div>
							<div className="blog-contentFooter">
								<h3 className="mt-2 h3blog">
									<a className="blog-link f-18 font-poppins">NSA tech Selected as top 10 sport ...</a>
								</h3>
								<p className="mt-3 textblog font-rubik">
									NStech as a Innovative sport performance analyzing technology got top 10 between.
									more than 3000 sport startup and technology from 77 countries that dedicated our
									features are..
								</p>
							</div>
							<div className="mt-4 Footerbloglink font-rubik">
								<a className="reade-more">Reade More</a>
								<FontAwesomeIcon className="Rightarrow" icon={faArrowRight} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 ">
						<div className="blog-content mt-4">
							<div className="blog-image">
								<img src={nikan2Page9} className="imgblog" />
							</div>
							<div className="blog-lable font-rubik">
								<p className="date">14</p>
								<p className="month">April</p>
							</div>
							<div className="blog-contentFooter">
								<h3 className="mt-2 h3blog">
									<a className="blog-link f-18 font-poppins">
										Top levels Soccer and Tennis joined ..
									</a>
								</h3>
								<p className="mt-3 textblog font-rubik">
									ATP/WTA tour and Champions league soccer Drill coach are ready to see your technique
									and results of comparing beside difference between your favorite player and you,
									they come ...
								</p>
							</div>
							<div className="mt-4 Footerbloglink font-rubik">
								<a className="reade-more">Reade More</a>
								<FontAwesomeIcon className="Rightarrow" icon={faArrowRight} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 mb-5 ">
						<div className="blog-content ">
							<div className="blog-image">
								<img src={nikan3Page9} className="imgblog" />
							</div>
							<div className="blog-lable font-rubik">
								<p className="date">14</p>
								<p className="month">April</p>
							</div>
							<div className="blog-contentFooter">
								<h3 className="mt-2 h3blog">
									<a className="blog-link f-18 font-poppins">
										Real Madrid Broke Heart Fc ....
									</a>
								</h3>
								<p className="mt-3 textblog font-rubik">
									L’Classico 2021 Started and we just saw incredible match in the first Half. Benzema
									Open the Wing’s and Real Go for flight.Karim Benzema put the champions in charge at
									a soggy ...
								</p>
							</div>
							<div className="mt-4 Footerbloglink font-rubik">
								<a className="reade-more">Reade More</a>
								<FontAwesomeIcon className="Rightarrow" icon={faArrowRight} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page9;
