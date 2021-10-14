import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Page4.css';

function Page4Video() {
	return (
		<div classNam="container">
			<div className="row d-flex justify-content-center">
				<div className="col-lg-12 pedar ">
					<div className="video-box">
						<h3 className="h3text font-poppins">What’s your solution</h3>
						<p className="mt-4 ptext font-rubik">
							see more how we can bring amazing technology for individual users and broadcaster
						</p>
						<div className="mt-4 pt-2 btnplaydiv">
							<a href="http://vimeo.com/99025203" className="play-btn-2 video-play-icon">
								<FontAwesomeIcon icon={faPlay} className="playicon" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page4Video;
