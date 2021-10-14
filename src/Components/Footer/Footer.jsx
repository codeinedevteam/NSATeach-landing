import React from 'react';
import './Footer.css';

import NSATechLogo from '../../assets/img/nsatech.light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className="container footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col3Footer">
						<div className="footer-logo">
							<img className="imgFooterLogo" src={NSATechLogo} />
						</div>
						<p className="text mt-4 font-rubik">nastecho@gmail.com</p>
						<p className="text-whiteNumbe f-20 font-rubik">+971509141802</p>
					</div>
					<div className="col-lg-3">
						<div className="footer-contant footer-spacing">
							<h6 className="footer-title font-poppins">Services</h6>
							<ul className="list-unstyled footer-link mt-4 font-rubik">
								<li className="li-item">Web Design</li>
								<li className="li-item">Development</li>
								<li className="li-item">Wordpress</li>
								<li className="li-item">Online Marketing</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="footer-contant footer-spacing">
							<h6 className="footer-title font-poppins">About Us</h6>
							<ul className="list-unstyled footer-link mt-4 font-rubik">
								<li className="li-item">Web Design</li>
								<li className="li-item">Development</li>
								<li className="li-item">Wordpress</li>
								<li className="li-item">Online Marketing</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="footer-contant ">
							<h6 className="footer-title font-poppins">Our Addresses</h6>
							<p className="textFooterp">
								1041 Edington Drive Atlanta,<br /> USA 30328
							</p>
							<div className="mt-4">
								<ul className="list-inline footer-social">
									<li className="list-inline-item">
										<a className="rounded-circle">
											<FontAwesomeIcon icon={faFacebook} className="faiconFooter" />
										</a>
									</li>
									<li className="list-inline-item ml-2">
										<a className="rounded-circle">
											<FontAwesomeIcon icon={faTwitter} className="faiconFooter" />
										</a>
									</li>
									<li className="list-inline-item ml-2">
										<a className="rounded-circle">
											<FontAwesomeIcon icon={faLinkedin} className="faiconFooter" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mt-5">
					<p className="footer-alt mb-0 font-rubik">© 2021 NSATech, Design by Alpha Software ©</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
