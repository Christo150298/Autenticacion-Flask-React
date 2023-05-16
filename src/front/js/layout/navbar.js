import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning">
			<div className="container d-flex">
				<Link to="/login">
					<span className="navbar-brand mb-0 h1">Login</span>
				</Link>
				<Link to="/singup">
					<span className="navbar-brand mb-0 h1">Singup</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<span className="navbar-brand">Demo</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
