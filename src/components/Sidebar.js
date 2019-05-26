import React from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<li>
						<NavLink exact activeClassName="active" to="/"> Home </NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/about"> About </NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/contact"> Contact </NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/user-list/10"> User List (params)</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/message"> Message (nested routing) </NavLink>
					</li>
				</ul>
			</div>
		)
	}
} 