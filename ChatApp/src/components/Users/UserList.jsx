import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserList extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div>
				<h3> UserList {this.props.users.length}</h3>
				<ul className="list-group">
				{
					this.props.users.map((user, i) => {
						return <li className="list-group-item" user={user} key={i}>
							{user.name}
						</li>
					})
				}
				</ul>
			</div>
		)
	}
}

export default UserList