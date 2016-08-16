import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

class MessageList extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div className="well">
				<h3>Messages</h3> 
				{
					this.props.messages.map((message, i) => {
						return <Message message = {message} key = {i} /> 
					})
				}
			</div>
		)
	}
}

export default MessageList