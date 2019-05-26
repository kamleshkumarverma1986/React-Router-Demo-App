import React from "react";

export default class About extends React.Component {

	constructor(props) {
		super(props);
		console.log("about loaded (CONSTRUCTOR)");
	}

	render() {
		console.log("about loaded (in render method)");
		return (
			<div>
				<h1> I am about </h1>
			</div>
		)
	}
} 