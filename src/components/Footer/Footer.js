import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<h1>Contact</h1>
			<div className="social-links">
				<a href="https://www.linkedin.com/in/abhay1kumar97/">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="https://www.instagram.com/abhaydhanad/">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="https://github.com/Abhay1kumar">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://twitter.com/Abhayku03218542">
					<i className="fab fa-twitter"></i>
				</a>
				{/* <a
					href="https://stackoverflow.com/users/16058244/nishant-bhosale"
					style={{ color: "white", fontSize: "2rem" }}
				>
					<i className="fa fa-stack-overflow"></i>
				</a> */}
			</div>
			<p style={{ color: "white", margin: "1rem", paddingTop: "2rem" }}>
				Abhay Kumar &copy; 2022
			</p>
		</footer>
	);
};

export default Footer;
