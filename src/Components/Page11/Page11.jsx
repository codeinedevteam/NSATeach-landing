import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Page11.css';
import emailIcon from '../../assets/img/001-email.svg';
import placeholder from '../../assets/img/001-placeholder.svg';
import calendar from '../../assets/img/001-calendar.svg';

function Page11() {
	return (
		<div className="Page11">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 ">
						<div className="title-heading text-center">
							<h3 className="h3 font-poppins">Contact Us</h3>
							<div className="title-border" />
							<p className="text-muted font-rubik">
								Because those who do not know how to pursue pleasure rationally encounter that are
								numquam eius modi tempora extremely painful.
							</p>
						</div>
					</div>
				</div>
				<div className="row  pt-3 rowinfo font-rubik">
					<div className="col-lg-4 col4info">
						<div className=" mt-4">
							<div className="contact-content mt-4 pt-1">
								<div className="contact-icon float-left mt-1 ">
									<FontAwesomeIcon icon={faMobile} className="facontact" />
								</div>
								<div className="contact-info">
									<p className="textphoneNumber mb-0">Phone Number</p>
									<p className="numberphone">+971509141802</p>
								</div>
							</div>
						</div>
						<div className=" mt-4">
							<div className="contact-content mt-4 pt-1">
								<div className="contact-icon float-left mt-1 ">
									<img src={emailIcon} className="faemail" />
								</div>
								<div className="contact-info">
									<p className="textphoneNumber mb-0">Email Address</p>
									<p className="numberphone">nastecho@gmail.com</p>
								</div>
							</div>
						</div>
						<div className=" mt-4">
							<div className="contact-content mt-4 pt-1">
								<div className="contact-icon float-left mt-1 ">
									<img src={placeholder} className="faemail" />
								</div>
								<div className="contact-info">
									<p className="textphoneNumber mb-0">Office Location</p>
									<p className="numberphone">1074 Murphy Court Anaheim, 92801</p>
								</div>
							</div>
						</div>
						<div className=" mt-4">
							<div className="contact-content mt-4 pt-1">
								<div className="contact-icon float-left mt-1 ">
									<img src={calendar} className="faemail" />
								</div>
								<div className="contact-info">
									<p className="textphoneNumber mb-0">Email Time</p>
									<p className="numberphone">Mon - Fri 09:00 - 7:00</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="custom-form mt-4">
							<div id="message" />
							<form>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group mt-3">
											<input
												type="text"
												className="form-control inputName"
												placeholder="Your Name"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group mt-3">
											<input
												type="text"
												className="form-control inputName"
												placeholder="E-mail Address"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group mt-3">
											<input
												type="text"
												className="form-control inputSubject "
												type="text"
												placeholder="Subject"
											/>
										</div>
									</div>
								</div>
								<div className="row ">
									<div className="col-lg-12 ">
										<div className="form-group  ">
											<textarea className=" inputMessage" type="text" placeholder="Messages" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="mt-3 divbtn">
											<input
												type="Submit"
												className="submitBtn btn  btn-round  font-rubik "
												value="Send Message"
											/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page11;
