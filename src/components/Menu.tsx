/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../assets/img/ubiquity-logo.svg";

const Menu = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const menuItems = ["Home", "About", "Portfolio", "Blog", "Contact"];

	return (
		<header className="site-header">
			<div className="container">
				<div className="ubiquity">
					<div className="ubiquity_logo">
						<img src={logo} alt="Ubiquity logo" />
					</div>
					<h1 className="ubiquity__title">
						Ubiquity{" "}
						<span className="ubiquity__baseline">Professional Web UI</span>
					</h1>
				</div>
				<nav className="main-nav">
					<button
						className="main-nav__toggler"
						aria-expanded={menuToggle}
						aria-controls="menu"
						aria-label="Menu"
						onClick={(e) => {
							setMenuToggle(!menuToggle);
						}}
					>
						<span className="main-nav__bar"></span>
						<span className="main-nav__bar"></span>
						<span className="main-nav__bar"></span>
					</button>
					<ul className="main-nav__list" id="menu" hidden>
						{menuItems.map((item) => {
							return (
								<li className="main-nav__item">
									<a
										href={item === "Home" ? "/" : item.toLowerCase()}
										className="main-nav__link"
									>
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Menu;
