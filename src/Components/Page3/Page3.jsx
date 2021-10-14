import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Page3.css';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Commenticon from '../../assets/img/001-comment.svg';

function Page3() {
	return (
		<div className="Page3">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">Our Featurs</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								Keep your Fans after watch your channel by NSAtech.co platform as Broadcaster and tv
								streamer.
							</p>
						</div>
					</div>
				</div>
				<div className="row  pt-3 vertical-content row1">
					<div className="col-lg-6 coll6">
						<div className="features-content mt-4">
							<p className="features-subtitle font-rubik">Engage your fans</p>
							<h3 className="line-height_1_6 mt-3 font-poppins">
								This is increasing your Markets and Fans easily.
							</h3>
							<p className="features-desc font-rubik mt-3">
								Show ANALYZE in live match from select target player technique, tactic, sense (tv
								streamer and broadcaster service)
							</p>
							<div className="features-icon mt-4">
								<img className="facomment" src={Commenticon} />
								<span className="ml-3">
									<a className="read-more font-rubik">Read More</a>
								</span>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="features-img mt-4 text-center">
							<img
								src="https://themesdesign.in/readxon/layouts/images/features/img-1.png"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="row  pt-3 vertical-content row2">
					<div className="col-lg-6">
						<div className="features-img mt-4 text-center">
							<img
								src="https://themesdesign.in/readxon/layouts/images/features/img-2.png"
								className="img-fluid2"
							/>
						</div>
					</div>
					<div className="col-lg-6 coll6">
						<div className="features-content mt-4">
							<p className="features-subtitle font-rubik">
								Promote your technique by your favorite player
							</p>
							<h3 className="line-height_1_6 mt-3 font-poppins">
								This is increasing your qualities in technique and performance
							</h3>
							<p className="features-desc font-rubik mt-3 ">
								Upload your video of game in NSAtech.co platform for player, coach, academy and else.
								Get 2D and 3D of your game and get familiar what’s your mistakes and problems in your
								Game, Compare your game with your favorite player easily by technology, shortly time.
							</p>
							<div className="features-icon mt-5">
								<img className="facomment" src={Commenticon} />
								<span className="ml-3">
									<a className="read-more font-rubik">Read More</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page3;
