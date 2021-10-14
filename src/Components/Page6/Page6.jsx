import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Page6.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page6() {
	return (
		<div className=" page6">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">Our Pricing</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								Because those who do not know how to pursue pleasure rationally encounter that are
								numquam eius modi tempora extremely painful.
							</p>
						</div>
					</div>
				</div>
				<div className="row rowCard">
					<div className="col-lg-4 ColLg4">
						<div className="pricing-box bg-white">
							<h3 className="h3textCard font-poppins">Deluxe</h3>
							<hr className="hrcard" />
							<p className="f-15 font-rubik">Mauris ornare turpis pharetra feugiat</p>
							<div className="pricing-features font-rubik">
							<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
							</div>
							<div className="mt-4 pt-3 text-center div3 font-poppins">
								<h1>
									<sup className="dolar f-20">$</sup>
									29
									<span className="f-16">/Month</span>
								</h1>
							</div>
							<div className=" text-center btndiv">
								<a className="btn btn-outline btn-round font-rubik">Get started</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 Card2 ColLg4">
						<div className="pricing-box2  ">
							<h3 className="h3textCard font-poppins">Deluxe</h3>
							<hr className="hrcard" />
							<p className="f-15 font-rubik">Mauris ornare turpis pharetra feugiat</p>
							<div className="pricing-features font-rubik">
							<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
							</div>
							<div className="mt-4 pt-3 text-center div3 font-poppins">
								<h1>
									<sup className="dolar f-20">$</sup>
									29
									<span className="f-16">/Month</span>
								</h1>
							</div>
							<div className=" text-center btndiv2">
								<a className="btn btn-outline btn-round font-rubik">Get started</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 ColLg4 ">
						<div className="pricing-box bg-white">
							<h3 className="h3textCard font-poppins">Deluxe</h3>
							<hr className="hrcard" />
							<p className="f-15 font-rubik">Mauris ornare turpis pharetra feugiat</p>
							<div className="pricing-features font-rubik">
							<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
								<p className="ptextpricing ">
									<FontAwesomeIcon icon={faCircle} className=" circleicon" />
									<span className="ml-3">24/7 Customer Support</span>
									
								</p>
							</div>
							<div className="mt-4 pt-3 text-center div3 font-poppins">
								<h1>
									<sup className="dolar f-20">$</sup>
									29
									<span className="f-16">/Month</span>
								</h1>
							</div>
							<div className=" text-center btndiv">
								<a className="btn btn-outline btn-round font-rubik">Get started</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page6;
