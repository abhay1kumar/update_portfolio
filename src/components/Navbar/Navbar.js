import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";
import profilepic from '../../images/passportsize.jpg'


const Navbar = () => {
	let [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded((prevState) => (expanded = !prevState));
	};

	const hideNavbar = () => {
		setExpanded(false);
	};

	const navLinksState = expanded ? " expanded" : "";

	return (
		<div className="navbar">
			<div className="navbar__content content-container-fluid">
				<a className="navbar__title" href="/">
					<div className="profileImage">
						<img src={profilepic} width="100px" height="100px" alt="profile pic" /></div>
					<h1 className="nav-name">Abhay Kumar</h1>
				</a>
				<button
					className="navbar__menu"
					onClick={toggleNavbar}
					aria-label="Toggle nav bar"
				>
					<MdMenu />
				</button>
				<div className={`navbar-links${navLinksState}`}>
					<NavLink link="#home" hide={hideNavbar}>
						Home
					</NavLink>
					<NavLink link="#about" hide={hideNavbar}>
						About
					</NavLink>
					<NavLink link="/#skills" hide={hideNavbar}>
						Skills
					</NavLink>
					<NavLink link="/#work" hide={hideNavbar}>
						Work
					</NavLink>
					<NavLink link="/#contact" hide={hideNavbar}>
						Contact
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
