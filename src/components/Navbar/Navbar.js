import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";


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
					<div className="profileImage"><img src="https://lh3.googleusercontent.com/bQtC0eZG2D_dkcR1rAlv5m3rm033kuJwEV_PrmB6UDgfm_xJyU6wEPKAn_Ckmv6ZOC1claizp73DpMlyDyIuNeaAEpfvbK2404q0YMuHV4a0kC2mkIKh5PoGKuUUDP_uhOgjdkNYBh59lbZ4f0fAYlFzKea-4AJAvfCKb4WGRpM21oHHV1dgOe1VY1nGIuWBakZmwrySznf9kTGR-FP79XfB4VKbPB6VktqijIrH0oOAGqHIJLwP0ggxAfI_r28zCdYaxusdpc_16rB2FMPMTSoUszez5eFAhadFbtMVgeY0rE3ygzxuvoy1WDkcl7TW3e2_LQVrNS8zg_q4VcQ-xO9TBRTICL-JztEVanpxX5pNelbDcFlSXgp6x4OPpq-f0piqxeG5VzllYC7HV8aZ6d9wTFVqr1ZnBQ7u7Kxv3xaXrAXCleTf9V58RHGENtNh5EIMV1g0julsZJF1Cfs3Z7u7dOjAqHkLkDABKYjhg_tlfmJ0lhpw11PT9VmkphYqIP9qCHzzpoekdmJxlGJaFkBdAf042_bKfBseedDvhgjt4Vx9tDLpakmc-ISefexD9ZNhXylFcq3UTLiifNQNzliWpK_A4MsNyvpciSqqxNEwjInUtqq_Gmrzm6A50UAcDJqXhlIg1ly8yShzEnI7MQJPaJcbnARYp0rcZ_Rf_AJZA6yeAsTYsJX73F4TYTccgDYm_edBHVdE3odjoy1mObrgwA=s914-no?authuser=0" width="50px" height="50px" alt="" /></div>
					<h1>Abhay Kumar</h1>
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
