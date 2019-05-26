import React from "react";

const UserList = (data) => {

	/* data will print total 3 properties =>
		data = {
			match => having url (route uri) and params
			location=> location related data
			history => browser history related data
		}
	*/
	return (
		
		<div>
			<h1> I am user list {data.match.params.userId}</h1>
		</div>
	)
}

export default UserList;