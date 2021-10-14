import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Page8.css';

function Page8() {
	return (
		<div className=" Page8">
			<div className="container">
			<div className="row">
				<div className="col-lg-12 ">
					<div className="title-heading text-center">
						<h3 className="h3 font-poppins">Frequently Asked Questions</h3>
						<div className="title-border" />
						<p className="text-muted font-rubik">
							please don’t hesitate to ask other question if you have by NSAtech contact menu.
						</p>
					</div>
				</div>
			</div>
			<div className="row pt-3 rowFabox">
				<div className="col-lg-6 ">
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">01.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">
									Video game Analysis and How Does It Help me as..
								</h5>
								<p className="faq-desc mt-3 mb-0 font-rubik">
									Today, investigate mistake and problem on game like technique and tactics are so
									..
								
								</p>
							</div>
						</div>
					</div>
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">02.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">When & Where can be used?</h5>
								<p className="faq-desc mt-3 mb-0 font-rubik">
									You can use it everywhere and everytime without any limitation, especially before
									..
								</p>
							</div>
						</div>
					</div>
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">03.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">How can I use this technologies?</h5>
								<p className="faq-desc36 mt-3 mb-0 font-rubik">
									It’s very easy to use, Just login at NSAtech.co you are able to use it on any
									...
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 ">
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">04.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">
									How can we collaborate with NSAtech as..
								</h5>
								<p className="faq-desc mt-3 mb-0 font-rubik">
									We developed our system completely modular, the broadcasters do not need to change
								..
								</p>
							</div>
						</div>
					</div>
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">05.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">
									How can we use NSAtech solutions as professional ..
								</h5>
								<p className="faq-desc mt-3 mb-0 font-rubik">
									You are able to submit your player’s action to NSAtech platform and select favorite
							..
								</p>
							</div>
						</div>
					</div>
					<div className="faq-box">
						<div className="">
							<div className="faq-count float-left ">
								<p className="textFacount font-rubik">06.</p>
							</div>
							<div className="faq-content">
								<div className="faicon">
									<FontAwesomeIcon className="helpicon" icon={faQuestion} />
								</div>
								<h5 className=" h5fatext font-poppins">
									How can I find my problems and track my progress..
								</h5>
								<p className="faq-desc36 mt-3 mb-0 font-rubik">
									You are able to track the growth of your performance and also get 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}

export default Page8;
