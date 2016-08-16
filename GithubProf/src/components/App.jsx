import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx'

class App extends Component{

	constructor(props){ 
		super(props); 
		this.state = {
			username: 'berniel', 
			userData: [], 
			userRepos: [], 
			perPage: 10
		}
	}

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId 
			+ '&client_secret=' + this.props.clientSecret, 
			dataType: 'json', 
			cache: false, 
			success: function(data){
				this.setState({
					userData: data
				}) 
			}.bind(this), 
			error: function(xhr, status, error){
				this.setState({
					username: null
				})
				alert(err); 
			}.bind(this)
		})
	}

	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' 
			+ this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created', 
			dataType: 'json', 
			cache: false, 
			success: function(data){
				this.setState({
					userRepos: data
				}) 
			}.bind(this), 
			error: function(xhr, status, error){
				this.setState({
					username: null
				})
				alert(err); 
			}.bind(this)
		})
	}

	componentDidMount(){
		this.getUserData(); 
		this.getUserRepos(); 
	}

	handleFormSubmit(username){
		this.setState({
			username: username
		}, function(){
			this.getUserData(); 
			this.getUserRepos(); 
		});
	}

	render(){ 
		return(
			<div> 
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
				<Profile {...this.state} /> 
			</div> 
		)
	}
}

App.propTypes = {
	clientId: React.PropTypes.string, 
	clientSecret: React.PropTypes.string
}; 

App.defaultProps = {
	clientId: '45c84baff3fd129f1ca2', 
	clientSecret: '0a7dc80de4ea5f2d67a38fbafb171d40be1d3a15'
}

export default App