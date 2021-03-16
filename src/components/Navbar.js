import React from "react";
import { Link } from "react-router-dom";
import ImageLogo from "../images/r.svg";

const Navbar = ({ toggle }) => {
	return (
		<nav
			className="navbar flex justify-between items-center h-16 bg-hero-pattern text-white font-sans relative"
			role="navigation"
		>
			<Link to="/" className="pl-20">
				<span className="text-white font-bold">Codevination</span>
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg
					className="w-6 h-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>
			<div className="pr-20 md:block hidden">
				<Link className="nav-items" to="/">
					Home
				</Link>
				<Link className="nav-items" to="/services">
					Service
				</Link>
				<Link className="nav-items" to="/about">
					About us
				</Link>
				<Link className="nav-items" to="/contact">
					Contact us
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
