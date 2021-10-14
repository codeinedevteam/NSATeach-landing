import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll } from 'react-scroll';
import './Navbar.css';


const Ul = styled.ul`
	list-style: none;
	display: none;
	flex-flow: row nowrap;

	li {
		padding: 18px 0px;
	}

	@media (max-width: 1000px) {
		flex-flow: column nowrap;
		background-color: #ffffff;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateY(60%)' : 'translatey(-60%)')};
		height: 80vh;
		width: 100%;

		transition: transform 0.5s ease-in-out;

		Link {
			color: #868e96;
			text-align: left;
		}
		list-style: none;
		display: block;
		flex-flow: row nowrap;
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul className="MobileNavLink" open={open}>

<li className="MobileNavLink">
							<Link
								to="Home"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="MobileNavitem"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								toactiveClass="active"
								to="section2"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Sevices
							</Link>
						</li>
						<li >
							<Link
								toactiveClass="active"
								to="section3"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Features
							</Link>
						</li>
						<li>
							<Link
								toactiveClass="active"
								to="section5"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Client
							</Link>
						</li>
						<li >
							<Link
								toactiveClass="active"
								to="section6"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Pricing
							</Link>
						</li>
						<li >
							<Link
								toactiveClass="active"
								to="section8"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								FAQ
							</Link>
						</li>
						<li className="">
							<Link
								toactiveClass="active"
								to="section9"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Blog
							</Link>
						</li>
						<li className="">
							<Link
								toactiveClass="active"
								to="section11"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
                className="MobileNavitem"							>
								Contact
							</Link>
						</li>
      
		</Ul>
	);
};

export default RightNav;
