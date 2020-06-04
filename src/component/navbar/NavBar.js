import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary">
			<a className="navbar-brand" href="/"> { props.title } </a>
			<ul className="navbar-nav mr-auto mt-lg-0" style={{ flexDirection: 'row' }}>
				<li className="mr-4 nav-item active">
					<Link className="nav-link" to="/" style={{ color : 'rgb(216, 200, 200)' }}>Home</Link>
				</li>
				<li className="mr-4 nav-item">
					<Link className="nav-link" to="/contact/add" style={{ color : 'rgb(216, 200, 200)' }}>Add</Link>
				</li>
				<li className="mr-4 nav-item">
					<Link className="nav-link" to="/about" style={{ color : 'rgb(216, 200, 200)' }}>About</Link>
				</li>
			</ul>
		</nav>
	);
}

NavBar.defaultProps = {
	title : "Default NavBar title"
}

NavBar.propTypes = {
	title : PropTypes.string.isRequired
}

export default NavBar;
