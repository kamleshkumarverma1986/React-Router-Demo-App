import React from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserList from "./components/UserList";
import Message from "./components/Message";

export default class Main extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<Header/>
					<Sidebar/>
					<div className="route-container">
						<Switch>
							<Route path="/" exact component={Home}/>
							<Route path="/about" component={About}/>
							<Route path="/contact" component={Contact}/>
							<Route path="/user-list/:userId" component={UserList}/>
							<Route path="/message" component={Message}/>
							<Redirect to="/" />
						</Switch>
					</div>
					<Footer/>
				</Router>
				
			</React.Fragment>
		);
	}
}