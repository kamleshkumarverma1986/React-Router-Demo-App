import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Inbox from "./Inbox";
import Sent from "./Sent";

const Message = ({match}) => {
	return (
		<div>
			<h1> I am message component</h1>
			<div className="position-relative">
				<Route path={match.url} render={ ()=>{
					return (
						<div> 
							<h2> Please select the option from message component </h2>
							<div>
								<ul>
									<li>
										<Link to={`${match.url}/inbox`}> Inbox </Link>	
									</li>
									<li>
										<Link to={`${match.url}/sent`}> Sent </Link>
									</li>
								</ul>
							</div>
						</div>
					)
				}}/>
				<div className="liner">
					<Switch>
						<Route path={`${match.url}/inbox`} component={Inbox} />
					    <Route path={`${match.url}/sent`} component={Sent} />
					    <Redirect to={`${match.url}/inbox`}/>
					</Switch>
					
				</div>
			</div>
		</div>
	) 
}

export default Message;