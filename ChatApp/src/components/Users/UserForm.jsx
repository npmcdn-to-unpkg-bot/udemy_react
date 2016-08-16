import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div>
				<h3> Chat Login </h3> 
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" className="form-control" ref="name" placeholder="Choose a Username" />
				
					<button type="submit" className="btn btn-default btn-block"> Enter </button> 

				</form> 
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault(); 

		var name = this.refs.name.value.trim(); 

		this.props.setUser({
			name: name
		}); 

		this.props.emit('userJoined', {name: name});

		this.refs.name.value = '';
	}
}

export default UserForm