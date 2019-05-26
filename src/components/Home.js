import React from "react";

export default class Home extends React.Component {
	
	constructor(props) {
		super(props);
		console.log("home loaded (CONSTRUCTOR)");
	}

	render() {
		console.log("home loaded (in render method)");
		return (
			<div>
				<h1> I am home </h1>
			</div>
		)
	}
} 