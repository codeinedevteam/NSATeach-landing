import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import LogoLight from '../../assets/img/nsatech.light.png';
import LogoDark from '../../assets/img/nsatech.dark.png';
import { Link, animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';
import Burger from './Burger';

function Navbar() {
	const [ show, setShow ] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 100) {
			setShow(true);
			console.log('ss');
		} else {
			setShow(false);
			console.log('sss');
		}
	};
	function myFunction() {
		var x = document.getElementById('myLinks');
		if (x.style.display === 'block') {
			x.style.display = 'none';
		} else {
			x.style.display = 'block';
		}
	}
	 function showSettings (event) {
		event.preventDefault();
	
	  }
	  useEffect(() => {
		  var width =window.screen.width
		 
		  return () => {
			 if(width=50000){
				 console.log('ss')
			 }
		  }
	  }, [])
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<nav
			className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark ${show === true
				? 'show'
				: 'not-show'}`}
		>
			<div className="container font-rubik divcoNav transition">
				<a className="navbar-brand logo text-uppercase">
					<img className="logo" src={show ? LogoDark : LogoLight} />
					<img className="logo1" src={LogoDark}/>
				</a>
				<div className="navbar-collapse collapse" id="navbarCollapse">
					<ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
						<li className="nav-item active">
							<Link
								to="Home"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section2"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''} 	`}
							>
								Sevices
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section3"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Features
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section5"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Client
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section6"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Pricing
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section8"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								FAQ
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section9"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								toactiveClass="active"
								to="section11"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className={`nav-link ${show === true ? 'showText ' : ''}`}
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		<Burger className="Burger"/>
		</nav>
	);
}

export default Navbar;
