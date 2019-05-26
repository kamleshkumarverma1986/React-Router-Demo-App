import React from "react";

export default class Contact extends React.Component {

	constructor(props) {
		super(props);
		console.log("contact loaded (CONSTRUCTOR)");
	}

	render() {
		console.log("contact loaded (in render method)");
		return (
			<div>
				<h1> I am contact </h1>
			</div>
		)
	}
} 