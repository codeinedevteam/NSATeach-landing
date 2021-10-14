import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBullseye, faCalendar, faHeadphones, faNotesMedical, faTv } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Page2() {
	return (
		<div className=" page2">
			<div className="container">
				<div className="row">
					<div className="col-lg-12  ">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">Our Services</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								NSAtech is the platform that is completely based on AI and useful for analyzing athlete
								performance and keep the fan for broadcasters.
							</p>
						</div>
					</div>
				</div>
				<div className="row   boxCard1">
					<div className="col-lg-4  Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">01.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faBook} className="notebook" />
								</div>
								<h5 className=" f-18 h5Text font-poppins">send video of technique</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								upload your video of game, get details about performance and technique in 2D and 3D
								analysis. (from amateur to professional all levels, all ages services).
							</p>
						</div>
					</div>
					<div className="col-lg-4  Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">02.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faReact} className="notebook" />
								</div>
								<h5 className="  f-18 h5Text font-poppins">Select your favorite player</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								you can select your target player like Roger Federer in tennis and Cristiano Ronaldo in
								soccer, by our technology, your game Comparing the performance of players with Elite
								players (players, coaches and clubs service).
							</p>
						</div>
					</div>
					<div className="col-lg-4  Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">03.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faTv} className="notebook" />
								</div>
								<h5 className=" f-18 h5Text font-poppins">Train everywhere</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								NSAtech bring amazing real-time action analyzing technology you can train at home and
								everywhere with your favorite player, like Roger Federer in tennis and Cristiano Ronaldo
								in soccer, you can see what’s mistake and problems in your technique and fix it
								simultaneously.
							</p>
						</div>
					</div>
				</div>
				<div className="row  boxCard2 ">
					<div className="col-lg-4  Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">04.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faCalendar} className="notebook" />
								</div>
								<h5 className=" f-18 h5Text font-poppins">follow your idol in live match</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								you can select your favorite players and see some new funny data in sports events about
								feeling by NSAtech AI technology: close up view - face detection (useful for sports
								broadcasters and channels as a unique entertainments data for fans attraction and
								rambling sports websites services too).
							</p>
						</div>
					</div>
					<div className="col-lg-4  Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">05.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faBullseye} className="notebook" />
								</div>
								<h5 className=" f-18 h5Text font-poppins">sports fans learning</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								you can select your favorite players and see new data in live match and reply video from
								your select target player like Roger Federer in tennis and Cristiano Ronaldo in soccer
								in technique, tactic, sense (your Childs and you see match and learn simultaneously
								beside tv streamer and broadcaster for sport events services).
							</p>
						</div>
					</div>
					<div className="col-lg-4 Cardbody">
						<div className="services-box mt-4">
							<p className="numberHeaderCard font-rubik">06.</p>
							<div className="mt-4">
								<div className="services-icon float-left">
									<FontAwesomeIcon icon={faHeadphones} className="notebook" />
								</div>
								<h5 className="f-18 h5Text font-poppins">engage fans in end of games</h5>
							</div>
							<p className="mt-4 mb-0 textCards font-rubik">
								NSAtech bring very useful technology after watch tv and live events that fans can get a
								new captured video of their favorite’s players (like Roger Federer in tennis and
								Cristiano Ronaldo in soccer in technique, tactic, sense) and train by the newest and
								updated of technique, tactic, sense of them, broadcasters can keep fans after finish
								live sport events and prevent to change channel after matches.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page2;
